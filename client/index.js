import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if ( process.env.NODE_ENV === 'development' ) {
  console.log('Client in development mode');
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
} else {
  ReactDOM.hydrate(
    <App/>,
    document.getElementById('root')
  );
}

if ( module.hot ) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(<NewApp />, document.getElementById('app'));
  });
}