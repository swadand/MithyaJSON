const router = require('express').Router();
const path = require('path');
const user = require(path.join(__dirname, '../../', 'data/users.json'));

router.get('/', (req, res)=> {
//    console.log("user route");
    res.setHeader("Content-type", "application/json");
    res.status(200).send(user);
});

router.post('/add', (req, res)=> {
    const data = req.body;
    data.id = 50;
    res.status(200).send(data);
});

router.get('/:id', (req, res)=> {
    const data = user.find(u => u.id.toString() == req.params.id);
    if(!data){
        res.status(404).send(JSON.stringify({
                error: {
                    "message":"Not Found"
                }
        }));
    }
    res.status(200).send(data);
});

router.put('/:id', (req, res)=> {
    var data = user.find(u => u.id.toString() == req.params.id);
    if(!data){
        res.status(404).send(JSON.stringify({
                error: {
                    "message":"Not Found"
                }
        }));
    }
    data = req.body; 
    res.status(200).send(data);
});

router.delete('/:id', (req, res)=> {
    const data = quotes.find(u => u.id.toString() == req.params.id);
    if(!data){
        res.status(404).send(JSON.stringify({
                error: {
                    "message":"Not Found"
                }
        }));
    }
    data.deleted = true;
    res.status(200).send(data);
});

router.get('*', (req, res)=> {
    res.status(404).send();
    //res.sendFile(path.join(__dirname, '../', 'views/404.html'));
});

//console.log(user);
module.exports = router;
