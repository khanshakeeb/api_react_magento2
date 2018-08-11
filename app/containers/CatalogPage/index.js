/*
 * CatalogPage
 *
 * List all the CatalogPage
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import A from 'components/A';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import MainWrapper from 'components/MainWrapper';
import LeftBar from 'components/LeftBar';
import ProductTile from 'components/ProductTile';
export default class CatalogPage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>AsimJofa</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <H1>
        <FormattedMessage {...messages.header} />
        </H1>



        <LeftBar />
<MainWrapper>
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        </MainWrapper>
      </div>
    );
  }
}
