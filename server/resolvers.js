const resolvers = {
  Query: {
    books: (root, _, { dataSources }) => dataSources.googleAPI.getBooks(),
  },
  Book: {
    id: ({ id }) => id,
    title: ({ volumeInfo: { title } }) => title,
  }
};

module.exports = resolvers;