const graphql = require('graphql');

const {
      GraphQLObjectType,
      GraphQLID,
      GraphQLString,
      GraphQLInt
    } = graphql;


// designemy auther schema type :


const AuthorType = new GraphQLObjectType({
  name:"Author",
  fields:()=>({
    id:{type:GraphQLID},
    name:{type:GraphQLString},
    age:{type:GraphQLInt}
  })
});


// export module :

module.exports = AuthorType;
