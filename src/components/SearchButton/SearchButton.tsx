import React, { useContext } from 'react';
import styled from 'styled-components';
import { usePanelContext } from 'contexts/SearchPanelContext';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as AccordionIcon } from '../../assets/accordionIcon.svg';

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

const StyledSearchIcon = styled(SearchIcon)`
  transform: scale(1.1);
`;

const StyledAccordionIcon = styled(AccordionIcon)`
  transform: scale(1.1);
`;

const SearchButton: React.FC = () => {
  const [open, setOpen] = usePanelContext();
  return (
    <Button onClick={() => setOpen(!open)}>
      {open ? <StyledAccordionIcon /> : <StyledSearchIcon />}
    </Button>
  );
};

export default SearchButton;
