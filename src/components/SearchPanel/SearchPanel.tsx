import React from 'react';
import styled from 'styled-components';
import SearchBar from 'components/SearchBar';

const StyledPanel = styled.div`
  position: absolute;
  margin: 1.5rem;
  z-index: 1;
`;

const SearchPanel = () => {
  return (
    <StyledPanel>
      <SearchBar />
    </StyledPanel>
  );
};

export default SearchPanel;
