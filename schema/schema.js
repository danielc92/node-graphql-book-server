const graphql = require('graphql');

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt,
    GraphQLSchema } = graphql;

var books = [
    { name: 'ravens jurg', genre: 'science', id: '1', authorId: '3' },
    { name: 'banana farming', genre: 'adventure', id: '2', authorId: '4'},
    { name: 'rainbow synergy', genre: 'cooking', id: '3', authorId: '4'}
]

var authors = [
    { name: 'bobby boosan', age: 33, id: '4'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => {
        return {
            id: { type: GraphQLString },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            author: { 
                type: AuthorType,
                resolve(parent, args) {
                    console.log('this is the parent', parent)
                    return authors.filter(item => item.id === parent.authorId)[0]
                }
            }
        }
    }
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
            books: { 
                type: new GraphQLList(BookType),
                resolve(parent, args) {
                    console.log(args)
                    return books.filter(book => book.authorId === parent.id)
                }
            }
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
                return books.filter(item => item.id === args.id)[0]
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                return authors.filter(item => item.id === args.id)[0]
            }
        }
    }
})


// export for server.js usage
module.exports = new GraphQLSchema({
    query: RootQuery,

})