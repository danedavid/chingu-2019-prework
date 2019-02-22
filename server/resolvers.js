const resolvers = {
  Query: {
    search: (root, { searchString }, { dataSources }) => dataSources.googleAPI.getBooks(searchString),
  },
  Book: {
    id: ({ id }) => id,
    title: ({ volumeInfo: { title } }) => title,
    subtitle: ({ volumeInfo: { subtitle } }) => subtitle,
    authors: ({ volumeInfo: { authors }}) => authors,
    imageLinks: ({ volumeInfo: { imageLinks }}) => imageLinks,
    pageCount: ({ volumeInfo: { pageCount }}) => pageCount,
  },
  ImageLink: {
    small: ({ smallThumbnail }) => smallThumbnail,
    normal: ({ thumbnail }) => thumbnail,
  },
  SearchResult: {
    count: ({ totalItems }) => totalItems,
    books: ({ items }) => items,
  }
};

module.exports = resolvers;