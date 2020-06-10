import React from 'react';
import styled from 'styled-components';
import Bio from './Bio';
import ContentWrapper from './ContentWrapper';

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

const Contents = ({ children }: { children: JSX.Element }) => {
  return (
    <ContentWrapper>
      <Content>
        <MainWrapper>
          <main>{children}</main>
        </MainWrapper>
        <Bio />
      </Content>
    </ContentWrapper>
  );
};

export default Contents;
