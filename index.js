const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use('/static', express.static('public'));

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























