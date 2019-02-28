import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { hot } from 'react-hot-loader/root';
import Home from './components/Home';
import { ClientContext } from './helpers/context';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:4000/api');

const GlobalStyles = createGlobalStyle`
  * {
    outline: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }

  #root {
    position: relative;
    min-height: 100vh;
    background-image: url("assets/bg.jpg");
    background-size: cover;
    background-color: antiquewhite;
    padding: 20px 40px;
  }
`;

const App = () => (
  <ClientContext.Provider value={{ client }}>
    <GlobalStyles/>
    <Home/>
  </ClientContext.Provider>
);

export default hot(App);