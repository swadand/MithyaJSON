const router = require('express').Router();
const path = require('path');
const user = require(path.join(__dirname, '../../', 'data/users.json'));

router.get('/', (request, response)=> {
//    console.log("user route");
    response.setHeader("Content-type", "application/json");
    response.status(200).send(user);
});

router.get('*', (request, response)=> {
    response.status(404).send('not found');
});

//console.log(user);
module.exports = router;
