// // app.get('/', (req, res) => res.send('Hello World!'));

// First we need to import the HTTP module. This module contains all the logic for dealing with HTTP requests.
var express = require('express');
const request = require('request');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({   
      extended: true
    })); 

app.post('/',(req, res) => {
    if (req.body.challenge) {
        res.set({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Status':200
          })
        res.send(req.body.challenge);
    };
    if (req.body.type='event_callback') {
        request('https://slack.com/api/chat.postMessage?token=xoxp-328360805202-330111894502-333675210871-80b5279f846821e23a9b9c3ac5bb1e21&channel=G9R2H0H08&text=dad?&pretty=1', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
                console.log(body.message.text);
            });
    }
});

// Define port number to listen to - should match ngrok port
const PORT=3000;

// Finally we start the server
app.listen(PORT, function(){
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});