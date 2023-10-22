const router = require('express').Router();
const path = require('path');
const quotes = require(path.join(__dirname, '../../', 'data/quotes.json'));

router.get('/', (req, res)=> {
//    console.log("quote route");
    res.setHeader("Content-type", "application/json");
    res.status(200).send(quotes);
});

router.get('*', (req, res)=> {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views/404.html'));
});

//console.log(user);
module.exports = router;
