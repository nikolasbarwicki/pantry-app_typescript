import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    gray: string;
    green: string;
    red: string;
    bold: number;
    regular: number;
    text: string;
  }
}
