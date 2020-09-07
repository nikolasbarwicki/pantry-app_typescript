import React, { useReducer } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './context/context';

import reducer from './theme/reducer';
import store from './store';
import GlobalStyle from './theme/GlobalStyle';
import { darkTheme, lightTheme } from './theme/index';
import Root from './views/Root';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDark: false,
  });

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={state.isDark ? darkTheme : lightTheme}>
          <GlobalStyle />

          <Root />
        </ThemeProvider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
