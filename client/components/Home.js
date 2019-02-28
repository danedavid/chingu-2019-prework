import React, { useContext, useState } from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import SearchResults from './SearchResults';
import { ClientContext } from '../helpers/context';
import {
  INIT,
  LOADING,
  FAILED,
} from '../helpers/constants';
import { HomeContainer } from '../styles';

export default () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(INIT);
  const [searchTerm, setSearchTerm] = useState('');
  const { client } = useContext(ClientContext);

  const handleSearch = (value) => {
    if ( !value.trim() ) {
      return;
    }
    setStatus(LOADING);
    client.request(/* GraphQL */`
      query getBookList($search: String!) {
        search(searchString: $search) {
          count
          books {
            id
            title
            authors
            pageCount
            imageLinks {
              small
            }
          }
        }
      }
    `, {
      'search': value,
    })
      .then(data => {
        setStatus(INIT);
        setData(data);
        setSearchTerm(value);
      })
      .catch(err => {
        setStatus(FAILED);
        setData(null);
        console.error('Error while making API request: ', err);
      });
  };

  return (
    <HomeContainer>
      <Header/>
      <SearchBar
        status={status}
        handleSearch={handleSearch}
      />
      {
        data &&
          <SearchResults
            searchTerm={searchTerm}
            data={data}
          />
      }
    </HomeContainer> 
  )
};