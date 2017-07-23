// FIND
var mongo = require('mongodb').MongoClient;
var age = Number(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, (err, db) => {
    if(err) throw(err);
    db.collection('parrots').find({age: {$gt: age}}).toArray((err, parrots) => {
        if(err) throw(err);
        console.log(parrots);
        db.close();
    });
});
    