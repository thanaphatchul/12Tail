const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
// const port = 3000

// var path = require('path');

// app.use(express.static(__dirname,'/public'))
// app.get('/', (req, res) => {
//     var options = {
//         root: path.join(__dirname)
//     };
//     var fileName = 'index.html';
//     res.sendFile(fileName, options, function (err) {
//         if (err) {
//             next(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// })


var http = require('http');
var fs = require('fs');
process.env.PWD = process.cwd()
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/12tails.html'));
  });
  app.use('/', router);
  var port = process.env.PORT || 1800;
  app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port 1800");
  });
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Bangkok University Students;');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });