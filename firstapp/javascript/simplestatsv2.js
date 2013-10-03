db = db.getSiblingDB("firstapp")

// find all users who've checked in at Taj Mahal:

location_id_1 = db.locations.findOne({name:"Taj Mahal"}, {_id:1})["_id"]
location_id_2 = db.locations.findOne({name:"LotusFlower"}, {_id:1})["_id"]

user_2 = {
    _id: "user2@10gen.com",
    name: "user2",
    twitter: "user2"
}

db.users2.save(user_2)

checkin_1 = {
    location: location_id_1,
    user: "user2@10gen.com",
    ts: ISODate("2012-09-29T07:15:00.442Z")
}

db.checkins.save(checkin_1)

checkin_2 = {
	location: location_id_2,
	user: "user2@10gen.com",
	ts: ISODate("2012-09-01T11:52:27.442Z")
}

db.checkins.save(checkin_2)

user_3 = {
    _id: "user3@10gen.com",
    name: "user3",
    twitter: "user3"
}

db.users2.save(user_3)

checkin_3 = {
	location: location_id_2,
	user: "user3@10gen.com",
	ts: ISODate("2012-10-22T11:52:27.442Z")
}

db.checkins.save(checkin_3)

users = db.checkins.find({location: location_id_2}, {_id: 0, user: 1}).toArray()
userids = users.map(function(doc) {
    return doc.user
})

users = db.users.find({_id: {$in: userids}}).pretty()

// find the last 10 checkins here:
db.checkins.find({location: location_id_2}).sort({ts: -1}).limit(10).pretty()

// count how many checked in today:
db.checkins.find({location: location_id_2, ts: {$gt: midnight}}).count().pretty()
