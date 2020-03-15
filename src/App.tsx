import React from 'react';
import { createGlobalStyle } from 'styled-components';
import SearchPanel from './components/SearchPanel';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SearchPanel />
    </>
  );
};

export default App;
