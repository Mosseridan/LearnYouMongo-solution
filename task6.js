// UPDATE
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, (err, db) => {
    if(err) throw err;
    db.collection('users').update(
        {username: 'tinatime'},
        {$set: {age: 40}},
        (err, data) => {
            if(err) throw err;
            db.close();
        });
});


// // INSERT
// var mongo = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/learnyoumongo';
// var doc = {'firstName': process.argv[2], 'lastName': process.argv[3]};

// mongo.connect(url, (err, db) => {
//     if(err) throw err;
//     db.collection('docs').insert(doc, (err, data) => {
//         if(err) throw err;
//         console.log(JSON.stringify(doc));
//         db.close();
//     });
// });