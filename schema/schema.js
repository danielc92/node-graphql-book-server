const graphql = require('graphql');
const Book = require('../models/book.model');
const Author = require('../models/author.model');

// First import graphql types
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
    GraphQLSchema } = graphql;


// Create ObjectType for book instance
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => {
        return {
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            createdAt: { type: GraphQLString },
            author: { 
                type: AuthorType,
                resolve(parent, args) {  
                    return Author.findById(parent.authorId)
                }
            }
        }
    }
})


// Create ObjectType for author instance
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => {
        return {
            id: { type: GraphQLID },
            first_name: { type: GraphQLString },
            last_name: { type: GraphQLString },
            country: { type: GraphQLString },
            age: { type: GraphQLInt },
            books: { 
                type: new GraphQLList(BookType),
                resolve(parent, args) {
                    return Book.find({ authorId: parent.id })
                }
            }
        }
    }
})


/* The root query, includes all subqueries.
Can be called like so: 
query {
    books
}
*/
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString }},
            resolve(parent, args) {
                return Book.findById(args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
               return Author.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return Book.find({})
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({})
            }
        }
    }
})


// Mutations allow to update and insert data via GraphQL
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                first_name: { type: new GraphQLNonNull(GraphQLString) },
                last_name: { type: new GraphQLNonNull(GraphQLString) },
                country: { type: GraphQLString },
                age: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                })
                return author.save()
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLID }
            },
            resolve(parent, args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                })
                return book.save()
            }
        }
    }
})


// export for server.js usage
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})