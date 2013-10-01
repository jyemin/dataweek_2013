#!/bin/sh
githome="/Users/sridhar/git/sridharn/dataweek_2013"
datadir="$githome/firstapp/data"
if [ ! -d "$datadir" ]; then
    mkdir -p "$datadir"
fi
export PATH=$PATH:/opt/mongodb-osx-x86_64-2.2.2/bin