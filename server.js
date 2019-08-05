const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

// Use the graphql as middleware
app.use('/graphql', graphqlHTTP({

}));

const port = 3001;
app.listen(port, ()=>{ console.log(`listening for requests on port ${port}`)})