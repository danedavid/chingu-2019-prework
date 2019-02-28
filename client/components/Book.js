import React from 'react';
import {
  Card,
  Heading,
  Pane,
  Text
} from 'evergreen-ui';
import { ImageThumbnail } from '../styles';

export default ({ book }) => {
  return (
    <Card
      elevation={2}
      hoverElevation={3}
      width={150}
      height={220}
      float='left'
      marginLeft={16}
      marginBottom={16}
      background='#F5F6F7'
      border='#EDF0F2'
      padding={8}
      display='flex'
      flexDirection='column'
      alignItems='center'
      cursor='pointer'
    >
      <Heading height={40} textAlign='center' size={400} color='#234361' >
        { `${book.title.slice(0, 60)}${book.title.length > 60 ? '...' : ''}` }
      </Heading>
      <Pane
        position='relative'
        width={128}
        height={160}
        marginTop={12}
      >
        {
          book.imageLinks ?
            <ImageThumbnail
              src={book.imageLinks.small}
            />
            :
            <Text>Image not found</Text>
        }
      </Pane>
    </Card>
  );
};