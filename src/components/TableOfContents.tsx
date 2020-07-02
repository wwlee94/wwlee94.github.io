import React from 'react';
import styled from 'styled-components';

const TableIndex = styled.div`
  position: sticky;
  top: 2em;
  display: flex;
  align-items: center;
  justify-content: left;
  width: ${props => props.theme.sizes.tableOfContentWidth};
  padding: 1.5em;
  font-size: 20px;
  background: var(--bioBackground);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    position: relative;
    margin: 2em 0;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1.3em 1em;
  }
`;

const TableWrapper = styled.div`
  display: block;
  width: 100%;
  max-height: calc(100vh - 200px);
  word-break: break-word;
  font-size: 14px;
  color: black;
  overflow: auto;
  border-left: 1.5px solid rgb(233, 236, 239);
`;

const TableHeader = styled.h1`
  display: block;
  text-align: center;
  font-size: 18px;
  color: var(--bioColor);
  margin-bottom: 15px;
`;

const TableContents = styled.div`
  margin-left: 10px;
  
  a {
    color: rgb(134, 142, 150);
  };

  a:hover {
    color: var(--tableOfContentsFocusColor);
  }

  ul {
    list-style: none;
    margin-left: 10px;
    margin-bottom: 0px;
  };

  ul > li {
    line-height: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  };

  ul > li a[href='${(props: TableContentsProps) => props.currentHeaderUrl}'] {
    color: var(--tableOfContentsFocusColor);
    // font-size: 15px;
    font-weight: 600;
  };
`;

interface TableContentsProps {
  currentHeaderUrl: string | undefined;
}

interface Props {
  items: any;
  currentHeaderUrl: string | undefined;
}

const TableOfContents = ({ items, currentHeaderUrl }: Props) => {
  return items ? (
    <TableIndex>
      <TableWrapper className="table-of-contents">
        <TableHeader>🔖 Catalog</TableHeader>
        <TableContents dangerouslySetInnerHTML={{ __html: items }} currentHeaderUrl={currentHeaderUrl} />
      </TableWrapper>
    </TableIndex>
  ) : null;
};

export default TableOfContents;
