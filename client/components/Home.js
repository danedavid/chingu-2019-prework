import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import { ClientContext } from '../helpers/context';

export default () => {
  const { client } = useContext(ClientContext);

  const handleSearch = (value) => {
    client.request(/* GraphQL */`
      query getBookList($search: String!) {
        search(searchString: $search) {
          count
          books {
            title
          }
        }
      }
    `, {
      'search': value,
    }).then(data => console.log(data))    ;
  };

  return (
    <>
      <Header/>
      <SearchBar
        handleSearch={handleSearch}
      />
    </> 
  )
};