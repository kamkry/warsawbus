import React from 'react';
import styled from 'styled-components';
import { usePanelContext } from 'contexts/SearchPanelContext';
import BusAccordion from 'components/BusAccordion';

const Container = styled.div<{ open: boolean }>`
  height: calc(100vh - 6rem);
  width: 15rem;
  transform: translateX(${({ open }) => (open ? 0 : 'calc(-100% - 1rem)')});
  transition: transform 0.1s ease-out;
`;

const LineSection: React.FC = () => {
  const [open] = usePanelContext();
  return (
    <Container open={open}>
      <BusAccordion title="Autobusy" />
      <BusAccordion title="Tramwaje" />
    </Container>
  );
};

export default LineSection;
