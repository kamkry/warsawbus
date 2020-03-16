import React from 'react';
import styled from 'styled-components';
import { usePanelContext } from 'contexts/SearchPanelContext';
import BusAccordion from 'components/BusAccordion';
import { LinesProvider } from 'contexts/LinesContext';

const Container = styled.div<{ open: boolean }>`
  height: calc(100vh - 6rem);
  transform: translateX(${({ open }) => (open ? 0 : 'calc(-100% - 1rem)')});
  transition: transform 0.1s ease-out;
  pointer-events: auto;
`;

const LineSection: React.FC = () => {
  const [open] = usePanelContext().open;
  return (
    <Container open={open}>
      <LinesProvider>
        <BusAccordion type="bus" />
        <BusAccordion type="tram" />
      </LinesProvider>
    </Container>
  );
};

export default LineSection;
