const graphql = require('graphql');

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema } = graphql;

var books = [
    { name: 'ravens jurg', genre: 'science', id: '1' },
    { name: 'banana farming', genre: 'adventure', id: '2'},
    { name: 'rainbow synergy', genre: 'cooking', id: '3'}
]

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
                console.log(args)
                return books.filter(item => item.id === args.id)[0]
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,

})