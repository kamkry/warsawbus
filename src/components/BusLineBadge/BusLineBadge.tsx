import React from 'react';
import styled from 'styled-components';
import { useSelectedBusesContext } from 'contexts/SelectedBusesContext';

const Badge = styled.button<{ selected: boolean }>`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? '#67cf36' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border: ${({ selected }) => (selected ? 'none' : '1px solid #b5b5b5')};
  font-size: 1rem;
`;

interface BusLineBadgeProps {
  name: string;
}
const BusLineBadge: React.FC<BusLineBadgeProps> = ({ name }) => {
  const [selected, toggle] = useSelectedBusesContext();

  return (
    <Badge selected={selected.has(name)} onClick={() => toggle(name)}>
      {name}
    </Badge>
  );
};

export default BusLineBadge;
