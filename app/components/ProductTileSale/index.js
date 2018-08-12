import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Img from './Img';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import Price from './Price';
import PriceRegular from './PriceRegular';
import PriceSale from './PriceSale';
import ProductName from './ProductName';
import InnerWrapper from './InnerWrapper';
import Banner from './baner.jpg';
import AddtoCartButton from './AddtoCartButton';
function ProductTileSale() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Img src={Banner} />
        <ProductName><b>Lawn shirt</b></ProductName>
        <Price>
          <label>Price:</label>
          <PriceRegular>$ 140</PriceRegular>
          <PriceSale>$ 120</PriceSale>
        </Price>

        <AddtoCartButton>Add to Cart</AddtoCartButton>
      </InnerWrapper>
    </Wrapper>
  );
}

export default ProductTileSale;
