import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { SelectedBusesProvider } from 'contexts/SelectedBusesContext';
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
    font-family: Roboto,serif;
  }
`;

const App: React.FC = () => {
  return (
    <SelectedBusesProvider>
      <GlobalStyle />
      <SearchPanel />
      {/* <Map /> */}
    </SelectedBusesProvider>
  );
};

export default App;
