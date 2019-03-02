import React, { useState, useEffect, useContext } from 'react';
import {
  Pane,
  Spinner,
  Heading,
  Text,
  Link,
} from 'evergreen-ui';
import {
  LOADING,
  INIT,
} from '../helpers/constants';
import { ClientContext } from '../helpers/context';

export default ({ id }) => {
  const { client } = useContext(ClientContext);
  const [status, setStatus] = useState(LOADING);
  const [book, setData] = useState(null);

  useEffect(() => {
    client.request(/* GraphQL */`
      query getBookDetails($id: String!) {
        book(id: $id) {
          id
          title
          description
          previewLink
          imageLinks {
            normal
          }
          subtitle
          authors
          pageCount
        }
      }
    `, {
      id
    })
      .then(({ book }) => {
        // image load
        const promise = new Promise((resolve, reject) => {
          if ( book.imageLinks ) {
            const img = new Image();
            img.src = book.imageLinks.normal;
            img.onload = () => resolve(book);
            img.onerror = () => reject();
          } else {
            resolve(book);
          }
        });

        return promise;
      })
      .then(book => {
        setData(book);
        setStatus(INIT);
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  }, []);

  return (
    <Pane
      minHeight={300}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      {
        status === LOADING
        ? <Spinner size={32} />
        : (
          <Pane
            display='flex'
            flexDirection='row'
          >
            <Pane
              display='flex'
              flexDirection='column'
            >
              {
                book.imageLinks &&
                  <Pane
                    display='inline-block'
                    height={300}
                    width={200}
                    float='left'
                    backgroundImage={`url(${book.imageLinks.normal})`}
                    backgroundSize='100%'
                  />
              }
              <Link
                href={book.previewLink}
                target='_blank'
                color='neutral'
                marginTop={12}
              >
                See on Google Books >>
              </Link>
            </Pane>
            <Pane
              display='flex'
              flexDirection='column'
              marginLeft={32}
              maxWidth={500}
              maxHeight={500}
            >
              <Heading size={800}>{book.title}</Heading>
              {
                book.authors &&
                <Heading size={700} marginTop={2}>{ 'by ' + book.authors.join(', ')}</Heading>
              }
              <Pane
                marginTop={12}
                paddingY={8}
                paddingX={0}
                dangerouslySetInnerHTML={{ __html: book.description }}
              />
            </Pane>
          </Pane>
        )
      }
    </Pane>
  )
};