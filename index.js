const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use('/static', express.static('public'));

app.use(require('./routes'));

app.get(['', '/'], (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use((req, res) => {
    res.status(404)
        .send('Sorry... we couldn\'t find that resource!!');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));























