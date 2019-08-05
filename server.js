const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const app = express();


// connect to mongodb
mongoose.connect('mongodb://localhost:27017');
mongoose.connection.once('open', ()=>{
    console.log('The connection is open.')
})


// Use the graphql as middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const port = 3001;
app.listen(port, ()=>{ 
    console.log(`Listening on port ${port}`)
})