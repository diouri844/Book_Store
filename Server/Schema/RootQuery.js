const graphql = require('graphql');

const  { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema,
        GraphQLID
       } =  graphql;

const BookType =  require('./Book');
const AuthorType = require('./Author');

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
        id : {type :GraphQLID }
      },
      resolve(parent,args){
        // query provider : this is the function fired when i
        // have query about a Book:
      }
    },
    Author:{
      type:AuthorType,
      args:{
        id:{type:GraphQLID}
      },
      resolve(parent,args){
        // handel auther query :
      }
    }
  }
});

// export our schema :

module.exports = new GraphQLSchema({
  query:RootQuery
});
