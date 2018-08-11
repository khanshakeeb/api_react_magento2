import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Img from './Img';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import Price from './Price';
import ProductName from './ProductName';
import InnerWrapper from './InnerWrapper';
import Banner from './baner.jpg';
import AddtoCartButton from './AddtoCartButton';
function ProductTile() {
  return (
    <Wrapper>
      <InnerWrapper>
      <Img src={Banner} />
        <ProductName>Lawn shirt</ProductName>
        <Price>$ 140</Price>
        <AddtoCartButton>Add to Cart</AddtoCartButton>
      </InnerWrapper>
    </Wrapper>
  );
}

export default ProductTile;
