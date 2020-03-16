import React from 'react';
import styled from 'styled-components';
import SearchInput from 'components/SearchInput';
import SearchButton from 'components/SearchButton';

const StyledBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchBar: React.FC = () => {
  return (
    <StyledBar>
      <SearchButton />
      <SearchInput />
    </StyledBar>
  );
};

export default SearchBar;
