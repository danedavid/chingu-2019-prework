import React from 'react';
import { Pane, Heading } from 'evergreen-ui';
import Book from './Book';

export default ({ data: { search }, searchTerm }) => {
  const { count, books } = search;
  return (
    <Pane
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Heading
        marginBottom={28}
        size={600}
        marginTop='default'
        color='#F7F9FD'
        textShadow='2px 2px 2px rgba(0, 0, 0, 0.6)'
      >
        {`Search for "${searchTerm}" returned ${count} results ( Click on a book for more details):`}
      </Heading>
      <Pane
        clearfix
        display='flex'
        flexWrap='wrap'
      >
        {
          books.map(book => (
            <Book
              key={book.id}
              book={book}
            />
          ))
        }
      </Pane>
    </Pane>
  )
};