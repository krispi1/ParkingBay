const express = require('express');
const router = express.Router();

/* router.get('./', (req, res) => {
    res.sendfile('../public/index.html')
}); */

router.get('/test', (req, res) => {
    res.send('Test route');
});

router.get('/about', (req, res) => {
    res.send('About route')
});

module.exports = router;