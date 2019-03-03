const express = require('express');
const path = require('path');
const jsdom = require('jsdom').JSDOM;
const fs = require('fs');
const morgan = require('morgan');
//const parkOnSite = require('./app');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static('public'));

app.use(require('./routes'));

/* /////
var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime)
  
  app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
  })
///// */

// render root
app.get(['', '/'], (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/* app.get(['', '/'], (req, res) => {
  res.send(require('./homepage'));
}); */

app.use((req, res) => {
    res.status(404)
        .send('Sorry... we couldn\'t find that resource!!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

//////////////////////////////////

const indexHtml = fs.readFileSync('./public/index.html', 'utf8');

const { document } = (new jsdom(indexHtml, { runScripts: "dangerously" })).window;

function parkOnSite(){
    console.log("script loaded..");
    const divElems = document.getElementsByClassName("parkingSlot");
    const slotIdsDiv = document.getElementById("slotIds");
    for(var i = 0; i < divElems.length; i++){
        //console.log(divElems[i].id);
        slotIdsDiv.innerHTML += divElems[i].id;
        document.getElementById(divElems[i].id).addEventListener("click", divItemClicked);
    }
}
console.log(jsdom);
function divItemClicked(){
  console.log(alert("id_b08 moused-down"));
}

parkOnSite();



















