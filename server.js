const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();


// Use the graphql as middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const port = 3001;
app.listen(port, ()=>{ 
    console.log(`Listening on port ${port}`)
})