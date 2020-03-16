import styled from 'styled-components';
import React from 'react';
import { usePanelContext } from 'contexts/SearchPanelContext';

const InputWrapper = styled.div`
  height: 3rem;
  background-color: white;
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input<{ open: boolean }>`
  width: ${({ open }) => (open ? '15rem' : '0')};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  border: 0;
  padding: 0;
  transition: width 0.1s ease-out;
  font-size: 1.2rem;
  &::placeholder {
    color: #b5b5b5;
  }
`;

const SearchInput: React.FC = () => {
  const [open] = usePanelContext().open;
  const [filter, setFilter] = usePanelContext().filter;
  return (
    <InputWrapper>
      <StyledInput
        placeholder="Wpisz linię..."
        open={open}
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </InputWrapper>
  );
};

export default SearchInput;
