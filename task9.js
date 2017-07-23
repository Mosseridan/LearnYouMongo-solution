// AGGREGATE
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var collection = 'prices';
var size = process.argv[2];

mongo.connect(url, (err, db) => {
    if(err) throw err;
    db.collection(collection).aggregate([
        {$match: {'size': size}},
        {$group: {'_id': 'averagePrice', 'avg': {$avg: '$price'}}}],
        (err,res) => {
            if(err) throw err;
            if(!res) throw new Error('No matching results!');
            console.log(Number(res[0].avg).toFixed(2));
            db.close();
        });
});