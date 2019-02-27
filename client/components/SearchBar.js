import React, { useState } from 'react';
import { SearchInput, Button } from 'evergreen-ui';
import { SearchBarContainer } from '../styles';

const searchRef = React.createRef();

export default ({ handleSearch }) => {
  const [value, setValue] = useState('');

  const onChange = ({ target: { value }}) => {
    setValue(value);
  };
  
  const keyPressHandler = ({ charCode }) => {
    if ( charCode === 13 ) {
      handleSearch(value);
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        placeholder="Enter search string (Da Vinci Code, Agatha Christie)"
        height={40}
        width="100%"
        onKeyPress={keyPressHandler}
        ref={searchRef}
        value={value}
        onChange={onChange}
      />
      <Button
        appearance='primary'
        marginTop={10}
        iconAfter='search'
        onClick={() => handleSearch(value)}
      >
        Search
      </Button>
    </SearchBarContainer>
  );
};