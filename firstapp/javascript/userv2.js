db = db.getSiblingDB("firstapp")

user_1 = {
      _id: "sridhar@10gen.com",
      name: "Sridhar",
      twitter: "snanjund",
}

db.users2.save(user_1)

location_id_1 = db.locations.findOne({name:"Lotus Flower"}, {_id:1})["_id"]
location_id_2 = db.locations.findOne({name:"Taj Mahal"},    {_id:1})["_id"]

checkin_1 = {
      location: location_id_1,
      user: "sridhar@10gen.com",
      ts: ISODate("2012-09-21T11:52:27.442Z")
}

db.checkins.save(checkin_1)

checkin_2 = {
      location: location_id_2,
      user: "sridhar@10gen.com",
      ts: ISODate("2012-10-25T07:15:00.442Z")
}

db.checkins.save(checkin_2)

db.checkins.ensureIndex({user: 1})

db.checkins.find({user: "sridhar@10gen.com"}).pretty() 