import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Map from './components/Map';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Map />
    </>
  );
};

export default App;
