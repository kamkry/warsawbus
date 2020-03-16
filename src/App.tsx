import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from 'components/Map';
import SearchPanel from './components/SearchPanel';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Roboto,serif;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SearchPanel />
      <Map />
    </>
  );
};

export default App;
