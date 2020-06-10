import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from '../models/useTheme';
import GlobalStyle from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';
import Bio from './Bio';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';
import Header from './Header';

const Content = styled.div`
  margin-top: 2em;
  display: flex;
  min-height: 85vh;
  align-items: flex-start;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    display: block;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    margin-top: 0;
  }
`;

const MainWrapper = styled.div`
  width: calc(100% - ${props => props.theme.sizes.bioWidth} - 40px);
  margin-right: 40px;
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`;

interface Props {
  location: any;
  title: string;
  children: any;
}

const Layout = ({ location, title, children }: Props) => {
  const { themeMode, toggleTheme } = useTheme(); // hook 함수 하용
  const theme = themeMode === 'dark' ? darkTheme : lightTheme; // 테마 환경에 맞는 테마 컬러 가져오기.

  return (
    <ThemeProvider theme={theme}>
      <div className="siteRoot">
        <Header title={title} location={location} themeState={themeMode} onChangeTheme={toggleTheme} />
        <ContentWrapper>
          <Content>
            <MainWrapper>
              <main>{children}</main>
            </MainWrapper>
            <Bio />
          </Content>
        </ContentWrapper>
        <Footer />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Layout;
