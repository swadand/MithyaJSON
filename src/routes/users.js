const router = require('express').Router();
const path = require('path');
const user = require(path.join(__dirname, '../../', 'data/users.json'));

router.get('/', (req, res)=> {
//    console.log("user route");
    res.setHeader("Content-type", "application/json");
    res.status(200).send(user);
});

router.get('*', (req, res)=> {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views/404.html'));
});

//console.log(user);
module.exports = router;
