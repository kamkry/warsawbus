import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'assets/accordionIcon.svg';

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
`;

const Panel = styled.div<{ open: boolean }>`
  height: ${({ open }) => (open ? '4rem' : '0')};
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
  transition: height 0.2s ease-out;
`;

const AccordionIcon = styled(Icon)<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? '-90deg' : '0')});
  transition: transform 0.2s ease-out;
`;

export interface BusAccordionProps {
  title: string;
}
const BusAccordion: React.FC<BusAccordionProps> = ({ title }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  return (
    <span>
      <AccordionButton onClick={() => setAccordionOpen(!accordionOpen)}>
        <div>{title}</div>
        <AccordionIcon open={accordionOpen} />
      </AccordionButton>
      <Panel open={accordionOpen}>hej</Panel>
    </span>
  );
};

export default BusAccordion;
