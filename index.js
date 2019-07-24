var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/';

MongoClient.connect(url, function(err, db) {
  console.log("connected");
  var dbo = db.db("test");
  /*var newobj = {name: "dima", surname: "mai"};
  dbo.collection("Employers").insertOne(newobj, function(err, res) {
    if (err) throw err;
    console.log("new document inserted");
    db.close();
  });
  */
  dbo.collection("Employers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
  //var cursor = db.collection('pogs').find
   
});