import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Theme from './theme/Theme';
import GlobalStyle from './theme/GlobalStyle';

import Root from './views/Root';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Root />
      </Theme>
    </Provider>
  );
};

export default App;
