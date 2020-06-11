import React from 'react';
import { ThemeProvider } from 'styled-components';
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
          <Header title={title} location={location} />
          <Contents children={children} />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );

  return body;
};

export default Layout;
