import React from 'react';
import {
  Pane,
  Strong,
  Link
} from 'evergreen-ui';

export default () => (
  <Pane
    position='fixed'
    left={0}
    right={0}
    bottom={0}
    height={100}
    backgroundColor='rgba(180, 180, 180, 0.7)'
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <Strong
      size={500}
      marginRight={32}
      color='#557490'
      textShadow='1px 1px 5px rgba(100, 100, 100, 0.4)'
    >
      Built using React, GraphQL, Evergreen UI Components and Express
    </Strong>
    <Link
      size={500}
      textDecoration='none'
      marginLeft={32}
      color='neutral'
      target='_blank'
      textShadow='1px 1px 5px rgba(100, 100, 100, 0.4)'
      href='https://github.com/danedavid/chingu-2019-prework'
    >
      See Code on Github
    </Link>
  </Pane>
);