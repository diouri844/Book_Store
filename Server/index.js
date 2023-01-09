// config my expresse server :

const express = require('express');
const morgan = require('morgan');
const { graphqlHTTP } = require('express-graphql');
// import my generated schema :
const Schema =  require('./Schema/RootQuery');
// import my mongodb connector :

const  { makeConnexion } = require('./Client');
// create my sever entry point :

const my_app = express();

my_app.use(morgan('tiny'));

makeConnexion();
// config my graphql client :
my_app.use('/Graphql', graphqlHTTP({
  // graphql option object
  // Schema required
  schema :Schema
  // graphiql boolan
}));

my_app.listen(8080 , () =>{
  console.log(" ohh shet here we go again \n");
});


// config the ferst rounter :
