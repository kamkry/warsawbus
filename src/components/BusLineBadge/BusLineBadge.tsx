import React from 'react';
import styled from 'styled-components';

const Badge = styled.button`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b5b5b5;
  font-size: 1rem;
`;

interface BusLineBadgeProps {
  name: string;
}
const BusLineBadge: React.FC<BusLineBadgeProps> = ({ name }) => {
  return <Badge>{name}</Badge>;
};

export default BusLineBadge;
