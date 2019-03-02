import { RESTDataSource } from 'apollo-datasource-rest';

export const GoogleBooksAPI = class extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com/books/v1/';
  }

  async getBooks(searchString) {
    try {
      const route = `volumes?q=${searchString.split(' ').join('+')}&projection=lite&maxResults=30`;
      console.log(`HTTP GET ${this.baseURL}${route}`);
      const res = await this.get(route);
      return res;
    } catch (err) {
      console.error('Error while making HTTP request', err);
    }
  }

  async getBook(id) {
    try {
      const route = `volumes/${id}`;
      console.log(`HTTP GET ${this.baseURL}${route}`);
      const res = await this.get(route);
      return res;
    } catch (err) {
      console.error('Error while making HTTP request', err);
    }
  }
}