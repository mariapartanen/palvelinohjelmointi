// Luodaan palvelin joka voi lähettää staattisia tiedostoja
const http = require("http");
const url = require("url");
const fs = require("fs");

const lookup = require("mime-types").lookup;

const server = http.createServer((req, res) => {
    // käsittelee pyynnön ja lähetää takaisin staattiset tiedostot
    //kansiosta `public`
    let parsedURL = url.parse(req.url, true);
    // poistetaan johtavat ja peräkkäiset kauttaviivat
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    /**
     *  /
     *  /projektityo.html
     * 
     *  /projektityo.css
     *  /projektityo.js
     */
    if (path == "") {
      path = "projektityo.html";
    }
    console.log(`Requested path ${path} `);

    let file = __dirname + "/public/" + path;
    // asynkronoitu read file käyttää callbackia
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


/* 
var express = require("express");
 var app = express();

 app.get("/", function(req, res){
     res.send("<h1>Hello Node</h1>");
 })


 app.listen(3000,function(){
     console.log("Listening to port 3000");
 })
 */