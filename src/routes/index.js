const router = require('express').Router();

const userRoutes = require('./user');

router.use('/user', userRoutes);

router.get('/', (request, response)=> {
    response.sendFile('../../public/index.html');
});


module.exports = router;