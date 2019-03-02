const resolvers = {
  Query: {
    search: (root, { searchString }, { dataSources }) => dataSources.googleAPI.getBooks(searchString),
    book: (root, { id }, { dataSources }) => dataSources.googleAPI.getBook(id),
  },
  Book: {
    id: ({ id }) => id,
    title: ({ volumeInfo: { title } }) => title,
    subtitle: ({ volumeInfo: { subtitle } }) => subtitle,
    description: ({ volumeInfo: { description } }) => description,
    previewLink: ({ volumeInfo: { previewLink } }) => previewLink,
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

export default resolvers;