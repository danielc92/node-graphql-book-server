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


// Mutations allow to update and insert data via GraphQL
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: Author,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                })
                author.save()
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
    mutation: Mutation

})