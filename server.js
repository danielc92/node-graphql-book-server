const express = require('express');

const app = express();


const port = 3001;
app.listen(port, ()=>{ console.log(`listening for requests on port ${port}`)})