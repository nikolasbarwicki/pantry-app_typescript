import React, { createContext } from 'react';

type InitialStateType = {
  isDark: boolean;
};

const initialState = {
  isDark: false,
};

const ThemeContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<{ type: 'TOGGLE_DARK_MODE' }>;
}>({
  state: initialState,
  dispatch: () => null,
});

export default ThemeContext;
