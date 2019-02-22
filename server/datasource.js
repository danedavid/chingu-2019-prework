const { RESTDataSource } = require('apollo-datasource-rest');

class GoogleBooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
  }

  async getBooks(searchString) {
    const res = await this.get(`volumes?q=${searchString.split(' ').join('+')}`);
    return res.items;
  }
}

module.exports = { GoogleBooksAPI };