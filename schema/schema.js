const graphql = require('graphql');
const Book = require('../models/book.model');
const Author = require('../models/author.model');

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

            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
               
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){

            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {

            }
        }
    }
})


// export for server.js usage
module.exports = new GraphQLSchema({
    query: RootQuery,

})