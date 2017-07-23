// REMOVE
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/' + process.argv[2];
var collection = process.argv[3];
var id = process.argv[4];

mongo.connect(url, (err, db) => {
    if(err) throw err;
    db.collection(collection).remove({'_id': id}, (err) => {
        if(err) throw err;
        db.close();
    });
});
