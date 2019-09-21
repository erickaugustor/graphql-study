const { GraphQLServer } = require('graphql-yoga');

// Type definitions (schema)
const typeDefs = `
  type Query {
    hello: String!
  }
`

// Resolvers 
const resolvers = {
  Query: {
    hello() {
      return "This is my First query!"
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("The server is up!"));