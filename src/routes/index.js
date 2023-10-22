const router = require('express').Router();
const path = require('path');
const usersRoutes = require('./users');
const quotesRoutes = require('./quotes');

router.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../', 'views/index.html'));
});

router.get('/help', (req, res)=> {
    res.sendFile(path.join(__dirname, '../', 'views/help.html'));
});

router.use(['/user', '/users'], usersRoutes);
router.use(['/quote', '/quotes'], quotesRoutes);

router.get('*', (req, res)=> {
    res.status(404);
    res.sendFile(path.join(__dirname, '../', 'views/404.html'));
});

module.exports = router;
