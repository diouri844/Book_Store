const graphql = require('graphql');

const  { GraphQLObjectType, GraphQLString, GraphQLSchema } =  graphql;

const BookType =  require('./Book');


//* create my root query :
// a root query is all the query that can i make
// from the front end client :


const RootQuery = new GraphQLObjectType({
  name:'RootQuery',
  fields:{
    Book:{
      type : BookType,
      args:{
        // list of allowed args :
        id : {type :GraphQLString }
      },
      resolve(parent,args){
        // query provider
      }
     }
  }
});

// export our schema :

module.exports = new GraphQLSchema({
  query:RootQuery
});
