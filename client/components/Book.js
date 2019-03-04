import React, { useState } from 'react';
import {
  Card,
  Heading,
  Pane,
  Text,
  Dialog,
} from 'evergreen-ui';
import { ImageThumbnail } from '../styles';
import BookDetails from './BookDetails';

export default ({ book }) => {
  const [dialog, setDialogStatus] = useState(false);
  const showDialog = () => setDialogStatus(true); 
  const hideDialog = () => setDialogStatus(false); 

  return (
    <>
      <Dialog
        isShown={dialog}
        onCloseComplete={hideDialog}
        hasFooter={false}
        hasHeader={false}
        width='800px'
      >
        <BookDetails
          id={book.id}
        />
      </Dialog>
      <Card
        elevation={2}
        hoverElevation={3}
        width={150}
        height={220}
        float='left'
        marginLeft={20}
        marginBottom={20}
        background='#F5F6F7'
        border='#EDF0F2'
        padding={8}
        display='flex'
        flexDirection='column'
        alignItems='center'
        cursor='pointer'
        onClick={showDialog}
        title={book.title}
      >
        {
          book.title &&
            <Heading height={40} textAlign='center' size={400} color='#234361' >
              { `${book.title.slice(0, 60)}${book.title.length > 60 ? '...' : ''}` }
            </Heading>
        }
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
    </>
  );
};