import React from 'react';
import styled from 'styled-components';
import { usePanelContext } from 'contexts/SearchPanelContext';
import { useSelectedBusesContext } from 'contexts/SelectedBusesContext';
import SelectedBusBadge from 'components/SelectedBusBadge';
import { v4 as uuid } from 'uuid';

const BusSection = styled.section<{ open: boolean }>`
  width: 3rem;
  height: 100%;
  max-height: calc(100vh - 5rem);
  transform: translateX(${({ open }) => (open ? 0 : '-19rem')});
  transition: transform 0.1s ease-out;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const SelectedBusSection = () => {
  const [open] = usePanelContext().open;
  const [selected] = useSelectedBusesContext();
  return (
    <BusSection open={open}>
      {[...selected].map(name => (
        <SelectedBusBadge key={uuid()} name={name} />
      ))}
    </BusSection>
  );
};

export default SelectedBusSection;
