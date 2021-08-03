const { ApolloServer, PubSub } = require('apollo-server');

// connect to database
const mongoose = require('mongoose');

// import typeDefs
const typeDefs = require('./graphql/typeDef');

//import post module
const resolvers = require('./graphql/resolvers');


const { MONGODB } = require('./config');

const pubsub = new PubSub();


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub})
});

// connect to database before we start our server 
mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(()=> {
        console.log('MongoDB Connected');
        return server.listen({port: 5000});

    })
    .then((res) =>{
        console.log(`Server running at ${res.url}`)
    });
