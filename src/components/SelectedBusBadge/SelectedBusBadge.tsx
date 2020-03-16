import React from 'react';
import styled from 'styled-components';
import { useSelectedBusesContext } from 'contexts/SelectedBusesContext';
import { ReactComponent as CancelIcon } from 'assets/cancel.svg';

const Badge = styled.button`
  height: 2rem;
  width: 100%;
  padding: 0 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #67cf36;
  color: white;
  border: none;
  font-size: 0.9rem;
  text-align: center;
  margin: 0 1rem 1rem 0;
  cursor: pointer;
`;

const Label = styled.div`
  margin-bottom: 1px;
  width: 1.5rem;
`;

const StyledCancelIcon = styled(CancelIcon)`
  transform: scale(1.2);
  margin: 0 0.2rem 0 0.1rem;
`;

interface BusLineBadgeProps {
  name: string;
}
const SelectedBusBadge: React.FC<BusLineBadgeProps> = ({ name }) => {
  const [, toggle] = useSelectedBusesContext();
  return (
    <Badge onClick={() => toggle(name)}>
      <Label>{name}</Label>
      <StyledCancelIcon />
    </Badge>
  );
};

export default SelectedBusBadge;
