import React, { useState } from 'react';
import { SearchInput, Button, Spinner } from 'evergreen-ui';
import { SearchBarContainer } from '../styles';
import {
  INIT,
  LOADING,
  FAILED,
} from '../helpers/constants';

const getButtonProps = (status) => {
  switch ( status ) {
    case INIT     : return { text: 'Search', intent: 'success' };
    case LOADING  : return { text: 'Loading', intent: 'warning' };
    case FAILED   : return { text: 'Try Again', intent: 'danger' };
    default       : return { text: 'Search', intent: 'success' };
  }
}

const searchRef = React.createRef();

export default ({ handleSearch, status }) => {
  const [value, setValue] = useState('');

  const onChange = ({ target: { value }}) => {
    setValue(value);
  };
  
  const keyPressHandler = ({ charCode }) => {
    if ( charCode === 13 ) {
      handleSearch(value);
    }
  };

  const { intent, text } = getButtonProps(status);

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
        intent={intent}
        marginTop={10}
        iconAfter={status === LOADING ? null : 'search'}
        onClick={() => handleSearch(value)}
      >
        { text }
        { status === LOADING && <Spinner marginLeft={8} size={18} /> }
      </Button>
    </SearchBarContainer>
  );
};