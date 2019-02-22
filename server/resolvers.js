const resolvers = {
  Query: {
    search: (root, { searchString }, { dataSources }) => dataSources.googleAPI.getBooks(searchString),
  },
  Book: {
    id: ({ id }) => id,
    title: ({ volumeInfo: { title } }) => title,
  },
};

module.exports = resolvers;