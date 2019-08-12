# GraphQL Javascript Server
Backend server for book app, using MongoDB, Mongoose, GraphQL and Nodejs.

### Concepts
This project covers;
- Creating a basic web server with Express and Node.
- Creating a MongoDB instance and accessing it via Mongoose ODM.
- Adding a query layer (GraphQL) to access and manipulate data from MongoDB.
- Exposing the server, such that a front-end application can access it (eg. React).

### Running the server

From root project directory. `nodemon` allows for hot-reloading. Alternatively you can run the server with `node server.js`.

```sh
nodemon server.js
```

### Accessing the server

You can access the server in browser using the `GraphiQL` interface via `http://localhost:3001/graphql`. Conversely you can access it via the frontend. In this case I accessed the GraphQL server using Apollo and React. However I used `GraphiQL` for testing purposes.

### Requirements

This server runs on Node. The version of Node I used was `v10.16.0`.

I also installed a MongoDB instance locally, more instructions on that can be found on the official mongodb documentation.

The requirements are shown in package.json and can be installed via

```sh
npm install
```

### Screenshots
Screenshots taken from graphiql interface after visiting `localhost:3001/graphql` in chrome. The last two screenshots showcase the extreme flexiblity which GraphQL allows for, allowing for very deep nesting and optional fields makes it a great tool for querying client side.

**Using the addAuthor mutation to create new author(s).**
![An image from graphiql](https://github.com/danielc92/node-graphql-book-server/blob/master/screenshots/1.png)

**Querying author(s).**
![An image from graphiql](https://github.com/danielc92/node-graphql-book-server/blob/master/screenshots/2.png)

**Using the addBook mutation to create new book(s).**
![An image from graphiql](https://github.com/danielc92/node-graphql-book-server/blob/master/screenshots/3.png)

**Querying books, as well as their respective author.**
![An image from graphiql](https://github.com/danielc92/node-graphql-book-server/blob/master/screenshots/4.png)

**Querying authors, as well as their respective books.**
![An image from graphiql](https://github.com/danielc92/node-graphql-book-server/blob/master/screenshots/5.png)

### Sources

- [GraphQL npm package](https://www.npmjs.com/package/graphql)
- [Express](https://www.npmjs.com/package/express)
- [Mongoose ODM](https://www.npmjs.com/package/mongoose)
- [MongoDB](https://www.mongodb.com/)
