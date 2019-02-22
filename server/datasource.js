const { RESTDataSource } = require('apollo-datasource-rest');

class GoogleBooksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
  }

  async getBooks(searchString) {
    try {
      const route = `volumes?q=${searchString.split(' ').join('+')}`;
      console.log(`HTTP GET ${this.baseURL}${route}`);
      const res = await this.get(route);
      return res;
    } catch (err) {
      console.error('Error while making HTTP request', err);
    }
  }
}

module.exports = { GoogleBooksAPI };