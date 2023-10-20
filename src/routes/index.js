const router = require('express').Router();
const path = require('path');
const usersRoutes = require('./users');
const quotesRoutes = require('./quotes');

router.get('/', (req, res)=> {
//    console.log("/ route");
    res.sendFile(path.join(__dirname, '../', 'views/index.html'));
});

router.use(['/user', '/users'], usersRoutes);
router.use(['/quote', '/quotes'], quotesRoutes);

router.get('*', (req, res)=> {
    res.status(404).send('not found');
});

//router.use('/user', usersRoutes);
//router.use(['/quote', '/quotes'], quotesRoutes);

module.exports = router;
