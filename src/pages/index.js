import React from 'react';
import Layout from '../components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 4rem;
    font-family: 'HK Grotesk', 'Roboto', sans-serif;
    color: #444444;
    background: #ee6868;
  };
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
`;

const Page = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
};

export default Page;
