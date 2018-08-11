import React from 'react';
import { FormattedMessage } from 'react-intl';
import A from './A';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import LeftBarWrapper from './LeftBarWrapper';



function LeftBar() {
  return (
    <LeftBarWrapper>
    <List>
      <ListItem>
        <ListItemTitle>
        Best Sellers
        </ListItemTitle>
      </ListItem>
      <ListItem>
          <A>DRESSES</A>
      </ListItem>
      <ListItem>
            <A>EXCLUSIVES</A>
      </ListItem>
      <ListItem>
          <A>TOPS</A>
      </ListItem>
      <ListItem>
              <A>KNITWEAR</A>
      </ListItem>
      <ListItem>
            <A>BOTTOMS</A>
      </ListItem>
      <ListItem>
            <A>JACKETS & OUTERWEAR</A>
      </ListItem>
      <ListItem>
            <A>JEWELRY</A>
      </ListItem>

      <ListItem>
        <ListItemTitle>
        Collections
        </ListItemTitle>
      </ListItem>

      <ListItem>
        <ListItemTitle>
        LA Concept Space
        </ListItemTitle>
      </ListItem>

      <ListItem>
        <ListItemTitle>
        Stores
        </ListItemTitle>
      </ListItem>
      <ListItem>
        <ListItemTitle>
        Mens Sale
        </ListItemTitle>
      </ListItem>

      <ListItem>
        <ListItemTitle>
        Women Sale
        </ListItemTitle>
      </ListItem>

      <ListItem>
        <ListItemTitle>
        Men
        </ListItemTitle>
      </ListItem>











    </List>
    </LeftBarWrapper>
  );
}

export default LeftBar;
