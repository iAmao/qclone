const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'RegisterUser',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    firstname: {
      type: GraphQLString
    },
    lastname: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLString
    },
    updated_at: {
      type: GraphQLString
    }
  })
});
