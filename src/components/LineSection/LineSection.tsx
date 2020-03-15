import React from 'react';
import styled from 'styled-components';
import { usePanelContext } from 'contexts/SearchPanelContext';

interface LineSectionProps {
  open: boolean;
}

const Container = styled.div<LineSectionProps>`
  height: calc(100vh - 6rem);
  width: 15rem;
  background: white;
  transform: translateX(${({ open }) => (open ? 0 : 'calc(-100% - 1rem)')});
  transition: transform 0.1s ease-out;
`;

const LineSection: React.FC = () => {
  const [open] = usePanelContext();
  return <Container open={open} />;
};

export default LineSection;
