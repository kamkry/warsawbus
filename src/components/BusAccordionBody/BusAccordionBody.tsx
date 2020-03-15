import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { useLinesContext } from 'contexts/LinesContext';
import BusLineBadge from 'components/BusLineBadge';
import { usePanelContext } from 'contexts/SearchPanelContext';

const Panel = styled.div<{ open: boolean }>`
  max-height: ${({ open }) => (open ? 'calc(50% - 3rem)' : '0')};
  background-color: white;
  overflow: scroll;
  padding: ${({ open }) => (open ? '1rem' : 0)} 1rem;

  transition: max-height 0.15s ease-out, padding 0s ease-out 0.15s;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;
interface BusAccordionBodyProps {
  type: 'bus' | 'tram';
  open: boolean;
}

const BusAccordionBody: React.FC<BusAccordionBodyProps> = ({ type, open }) => {
  const lines = useLinesContext();
  const [filter] = usePanelContext().filter;
  return (
    <Panel open={open}>
      {lines[type]
        .filter(l =>
          l
            .toLowerCase()
            .replace('-', '')
            .startsWith(filter)
        )
        .map(b => (
          <BusLineBadge key={uuid()} name={b} />
        ))}
    </Panel>
  );
};

export default BusAccordionBody;
