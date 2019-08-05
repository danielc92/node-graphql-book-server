const graphql = require('graphql');

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => {
        return {
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            genre: { type: GraphQLString }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                //insert code to get data from database
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,

})