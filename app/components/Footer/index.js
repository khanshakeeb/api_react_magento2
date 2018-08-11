import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function MainWrapper() {
  return (
    <Wrapper>
      <section>
        <small>
          <FormattedMessage {...messages.licenseMessage} />
        </small>
      </section>
    </Wrapper>
  );
}

export default MainWrapper;
