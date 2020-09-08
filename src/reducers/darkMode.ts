import { Reducer } from 'react';

interface Actions {
  type: string;
}

interface Props {
  isDark: boolean;
}

const darkModeReducer: Reducer<Props, Actions> = (
  state = { isDark: false },
  action,
) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
