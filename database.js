var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("dbmpalestra");
    var myobj = { 
    nome: "sara", 
    cognome: "gagliardi",
    username:"sashgrey",
    password:"asdgrt56",
    palestra:"gimmy caluso",
    allenamento:"pump",
    indirizzo:"torino",
    somatotipo:"endomorfo"

 };
    dbo.collection("progressi").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
  