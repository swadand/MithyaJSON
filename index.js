const express = require('express');
const routes = require('./src/routes');
const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/', routes);

/* app.get('*', (request, response)=> {
    response.status(404).send('not found');
}) */

app.listen(PORT, ()=> {
    console.log(`server started on http://localhost:${PORT}`);
});

