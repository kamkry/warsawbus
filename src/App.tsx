import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { SelectedBusesProvider } from 'contexts/SelectedBusesContext';
import { LinesProvider } from 'contexts/LinesContext';
import SearchPanel from './components/SearchPanel';
import Map from './components/Map';

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
    <LinesProvider>
      <SelectedBusesProvider>
        <GlobalStyle />
        <SearchPanel />
        <Map />
      </SelectedBusesProvider>
    </LinesProvider>
  );
};

export default App;
