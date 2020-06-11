import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../models/useDarkMode';
import GlobalStyle from '../styles/global';
import DefaultTheme from '../styles/theme';
import Contents from './Contents';
import Footer from './Footer';
import Header from './Header';

interface Props {
  location: any;
  title: string;
  children: any;
}

const Layout = ({ location, title, children }: Props) => {
  const { theme, themeToggler } = useDarkMode();

  const body = (
    <ThemeProvider theme={DefaultTheme}>
      <>
        <GlobalStyle />
        <div
          className="App"
          style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
          }}
        >
          <Header title={title} location={location} theme={theme} onChangeTheme={themeToggler} />
          <Contents children={children} />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );

  // if (!mountedComponent) return <div style={{ visibility: 'hidden' }}>{body}</div>;

  return body;
};

export default Layout;
