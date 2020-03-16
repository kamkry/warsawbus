import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'assets/accordionIcon.svg';
import { useLinesContext } from 'contexts/LinesContext';
import { v4 as uuid } from 'uuid';
import BusAccordionBody from 'components/BusAccordionBody';
import { usePanelContext } from 'contexts/SearchPanelContext';

const AccordionButton = styled.button`
  background-color: #ebebeb;
  width: 100%;
  height: 3rem;
  border: 0;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  color: #707070;
  -webkit-appearance: none;
`;

const AccordionIcon = styled(Icon)<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? '-90deg' : '0')});
  transition: transform 0.15s ease-out;
`;

export interface BusAccordionProps {
  type: 'bus' | 'tram';
}
const BusAccordion: React.FC<BusAccordionProps> = ({ type }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [filter] = usePanelContext().filter;

  useEffect(() => {
    if (filter) {
      setAccordionOpen(true);
    } else {
      setAccordionOpen(false);
    }
  }, [filter]);

  return (
    <span>
      <AccordionButton onClick={() => setAccordionOpen(!accordionOpen)}>
        <div>{type === 'bus' ? 'Autobusy' : 'Tramwaje'}</div>
        <AccordionIcon open={accordionOpen} />
      </AccordionButton>
      <BusAccordionBody type={type} open={accordionOpen} />
    </span>
  );
};

export default BusAccordion;
