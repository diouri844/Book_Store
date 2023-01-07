const graphql = require('graphql');

const  { GraphQLObjectType, GraphQLString } =  graphql;


// designe my book schema :

const BookType = new GraphQLObjectType({
  name:"Book",
  fields:()=>({
    id:{type:GraphQLString},
    name:{type:GraphQLString},
    genre:{type:GraphQLString}
  })
});


module.exports = BookType;
