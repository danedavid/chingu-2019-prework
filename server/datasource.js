const { RESTDataSource } = require('apollo-datasource-rest');

class GoogleBooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
  }

  async getBooks() {
    const res = await this.get(`volumes?q=harry+potter`);
    return res.items;
  }
}

module.exports = { GoogleBooksAPI };