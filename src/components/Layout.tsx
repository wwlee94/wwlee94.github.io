import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../models/useDarkMode';
import GlobalStyle from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';
import Contents from './Contents';
import Footer from './Footer';
import Header from './Header';

interface Props {
  location: any;
  title: string;
  children: any;
}

const Layout = ({ location, title, children }: Props) => {
  const { theme, themeToggler, mountedComponent } = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const body = (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <div className="App">
          <Header title={title} location={location} theme={theme} onChangeTheme={themeToggler} />
          <Contents children={children} />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );

  if (!mountedComponent) return <div style={{ visibility: 'hidden' }}>{body}</div>;

  return body;
};

export default Layout;
