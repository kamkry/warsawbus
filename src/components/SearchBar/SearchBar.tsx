import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/search.svg';

interface BarProps {
  open: boolean;
}
const StyledBar = styled.div<BarProps>`
  width: ${({ open }) => (open ? 16 : 4)}rem;
  background-color: white;
  transition: width 0.2s ease-out;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: none;
  font: inherit;
  cursor: pointer;
`;

const StyledSearchIcon = styled(SearchIcon)`
  transform: scale(1.3);
`;

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledBar open={open}>
      <Button onClick={() => setOpen(!open)}>
        <StyledSearchIcon />
      </Button>
    </StyledBar>
  );
};

export default SearchBar;
