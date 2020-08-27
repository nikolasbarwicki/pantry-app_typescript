import React from 'react';
import Theme from './theme/Theme';
import GlobalStyle from './theme/GlobalStyle';

import Root from './views/Root';

const App: React.FC = () => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Root />
      </Theme>
    </>
  );
};

export default App;
