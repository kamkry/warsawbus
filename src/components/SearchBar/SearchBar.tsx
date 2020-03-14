import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/search.svg';

interface BarProps {
  open: boolean;
}
const StyledBar = styled.div<BarProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: none;
  font: inherit;
  cursor: pointer;
`;
const InputWrapper = styled.div<BarProps>`
  height: 3rem;
  background-color: white;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input<BarProps>`
  width: ${({ open }) => (open ? '16rem' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: width 0.2s ease-out;
  font-size: 1.2rem;
  border: 0;
`;

const StyledSearchIcon = styled(SearchIcon)`
  transform: scale(1.1);
`;

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBar open={open}>
      <Button onClick={() => setOpen(!open)}>
        <StyledSearchIcon />
      </Button>
      <InputWrapper open={open}>
        <SearchInput placeholder="Wpisz linię..." open={open} />
      </InputWrapper>
    </StyledBar>
  );
};

export default SearchBar;
