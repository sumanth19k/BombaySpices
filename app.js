var express = require('express');
var app=express();
var assert = require('assert');
var url = 'mongodb+srv://vkvamsi24:abba@1234@cluster0-xnzej.mongodb.net/test?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url);
const dbName = 'bombayspices';
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function(req, res, next){
  var resultArray = [];
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    const db = client.db(dbName);
    var cursor = db.collection('userdata').find();
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
    }, function(){
      client.close();
      res.render("firstpage.ejs")
    });
  });
});
app.get('/secondpage', function(req, res, next){
  var resultArray = [];
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    const db = client.db(dbName);
    var cursor = db.collection('userdata').find();
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
    }, function(){
      client.close();
      res.render("secondpage.ejs")
    });
  });
});
app.get('/thirdpage', function(req, res, next){
  var resultArray = [];
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    const db = client.db(dbName);
    var cursor = db.collection('userdata').find();
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
    }, function(){
      client.close();
      res.render("thirdpage.ejs")
    });
  });
});
app.post('/submitquery', function(req, res, next){
  var resultArray = [];
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    const db = client.db(dbName);
	  console.log(req.body)
	  db.collection('userdata').insert( { name: req.body.fname, email: req.body.email, phno: req.body.phno , class: req.body.gridRadios } )
    var cursor = db.collection('userdata').find();
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
    }, function(){
      client.close();
      res.render("thirdpage.ejs")
    });
  });
});
app.get('/fourthpage', function(req, res, next){
  var resultArray = [];
  MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    const db = client.db(dbName);
    var cursor = db.collection('userdata').find();
    cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
    }, function(){
      client.close();
      res.render("fourthpage.ejs")
    });
  });
});





app.listen(3000, () => console.log(`Server has started`))