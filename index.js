const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const jsdom = require('jsdom').JSDOM;
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;
console.log(favicon);
app.use(morgan('tiny'));

app.use(require('./routes'));
app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(favicon(path.join(__dirname,'public','favicon.ico')));
app.use(express.static('public'));
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

app.use((req, res) => {
    res.status(404)
        .send('Sorry... we couldn\'t find that resource!!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

/////////////////////////////////
