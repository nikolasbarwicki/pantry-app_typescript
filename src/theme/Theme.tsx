import React from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const theme = {
  white: '#FFFFFF',
  paleblue: '#F5F7FB',
  gray: '#6E6E6E',
  green: '#3AD3BF',
  red: '#FD808C',
  bold: 600,
  regular: 400,
  fontsize: {
    m: '1.6rem',
    l: '2.4rem',
    xl: '3.6rem',
  },
};

const Theme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
