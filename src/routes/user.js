const router = require('express').Router();
const json = require('../../data/user.json');

router.get('/', (request, response)=> {
    response.setHeader("Content-type", "application/json");
    response.status(200).send(json);
});

router.get('*', (request, response)=> {
    response.status(404).send('not found');
});

module.exports = router;