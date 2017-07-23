// COUNT
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var collection = 'parrots';
var age = Number(process.argv[2]);

mongo.connect(url, (err, db) => {
    if(err) throw err;
    db.collection(collection).count({age: {$gt: age}}, (err, count) => {
        if(err) throw err;
        console.log(count);
        db.close();
    });
});
