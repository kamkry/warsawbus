import React from 'react';
import styled from 'styled-components';
import SearchBar from 'components/SearchBar';
import { SearchPanelProvider } from 'contexts/SearchPanelContext';
import LineSection from 'components/LineSection';

const StyledPanel = styled.div`
  position: absolute;
  margin: 1rem;
  z-index: 1;
  display: grid;
  row-gap: 1rem;
`;

const SearchPanel = () => {
  return (
    <SearchPanelProvider>
      <StyledPanel>
        <SearchBar />
        <LineSection />
      </StyledPanel>
    </SearchPanelProvider>
  );
};

export default SearchPanel;
