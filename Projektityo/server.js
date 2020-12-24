
// 13.12. 
// Otetaan mongodb käyttöön
const mongodb = require('mongodb');
//Otetaan Mongoose käyttöön
const mongoose = require('mongoose');
// Otetaan BodyParser käyttöön
const bodyparser = require('body-parser');
// Otetaan Express käyttöön
express = require('express');
const app = express();
// Otetaan items käyttöön
const item = require('./item');
// Luodaan connectionstringille vakio
const uri = 'mongodb+srv://partmaria:M94rtan3N@cluster0.haiqj.mongodb.net/projektityodb?retryWrites=true&w=majority';
// Muodostetaan yhteys tietokantaan
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// Luodaan vakio tietokantayhteydelle
const db = mongoose.connection;
// Näytä ilmoitus jos yhteys ok
db.once('open', function() {
    console.log ('Tietokantayhteys avattu');
});
// Asetetaan määritykset express-palvelimelle
//Määritetään staattisten tiedostojen hakemisto
app.use(express.static('public'));
// Käytetään bodyparseria datan käsittelyssä
app.use(bodyparser.urlencoded( { extended: false }));
// Kirjoitetaan get-funktio
app.get('/items', function(req, res) {
    // Haetaan itemsit tietokannasta
    item.find( { }, function( err, result) {
        if ( err ){
            res.send(err);
        } else {
            res.send(result);
        }
    })
});
// Itemsin lisäys post-funktio
app.post('/projektityo.html', function (req, res) {
    console.log(req.body);
    // Varmuuden vuoksi poistetaan _id
    delete req.body._id;
    // Lisätään collectioniin uusi items
    db.collection('items').insertOne(req.body);
    res.send(JSON.stringify(req.body) + 'succesfully added');
});
// Itemsin poistaminen post-funktio
app.post('/deleteItem', function (req, res) {
    console.log(req.body);
    // Varmuuden vuoksi poistetaan _id
    delete req.body._id;
    // Poistetaan collectionista items id:n perusteella
    db.collection('items').deleteOne({ _id: new mongodb.ObjectID(req.body._id) }, function( err, results) {
    if (err ) {
        res.send(JSON.stringify(req.body) + 'Error deleting');
    } else {
        res.send(JSON.stringify(req.body) + 'Succesfully deleted');
    }
    });
});
// Laitetaan palvelin kuuntelemaan porttia 1234
const server = app.listen(1234, function(){});



/*
// 12.12.
// Luodaan palvelin joka voi lähettää staattisia tiedostoja
const http = require("http");
const url = require("url");
const fs = require("fs");

const lookup = require("mime-types").lookup;

const server = http.createServer((req, res) => {
    // Käsittelee pyynnön ja lähettää takaisin staattiset tiedostot
    // kansiosta `public`
    let parsedURL = url.parse(req.url, true);
    // poistetaan johtavat ja peräkkäiset kauttaviivat
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    //
    //  /
    //  /projektityo.html
    // 
    //  /projektityo.css
    //  /projektityo.js
    ///
    if (path == "") {
      path = "projektityo.html";
    }
    console.log(`Requested path ${path} `);

    let file = __dirname + "/public/" + path;
    // Asynkronoitu readfile käyttää callbackia
    fs.readFile(file, function(err, content) {
      if (err) {
        console.log(`File Not Found ${File}`);
        res.writeHead(404);
        res.end();
    } else { 
      // Täsmentää sisältötyypin vastauksessa
      console.log(`Returning ${path}`);
      res.setHeader("X-Content-Type-Options", "nosniff");
      let mime = lookup(path);
      res.writeHead(200, { "Content-type": mime });
      res.end(content);
    }
    });
});


server.listen(1234, "localhost", () => {
    console.log("Listening on port 1234");
});
*/


// 12.12 
// Testausta, staattisen tiedostojen hakemiston luontia
/* 
const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('projektityo.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
          res.write(data)  
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
 */


// 6.12. Testausta 
/* 
var express = require("express");
 var app = express();

 app.get("/", function(req, res){
     res.send("<h1>Hello Node</h1>");
 })


 app.listen(1234,function(){
     console.log("Listening to port 1234");
 })
 */