const router = require('express').Router();
const path = require('path');
const quotes = require(path.join(__dirname, '../../', 'data/quotes.json'));

router.get('/', (request, response)=> {
    response.setHeader("Content-type", "application/json");
    response.status(200).send(quotes);
});

router.get('*', (request, response)=> {
    response.status(404).send('not found');
});

//console.log(user);
module.exports = router;
