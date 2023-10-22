const express = require('express');
const routes = require('./src/routes');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static("./public"));
app.use('/', routes);

app.listen(PORT, ()=> {
    console.log(`server started on http://localhost:${PORT}`);
});

