import React from 'react';
import styled from 'styled-components';
import SearchBar from 'components/SearchBar';
import { SearchPanelProvider } from 'contexts/SearchPanelContext';
import LineSection from 'components/LineSection';
import SelectedBusSection from 'components/SelectedBusSection';

const StyledPanel = styled.div`
  position: absolute;
  margin: 1rem;
  z-index: 1;
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: 18rem 7rem;
`;

const SearchPanel = () => {
  return (
    <SearchPanelProvider>
      <StyledPanel>
        <SearchBar />
        <div />
        <LineSection />
        <SelectedBusSection />
      </StyledPanel>
    </SearchPanelProvider>
  );
};

export default SearchPanel;
