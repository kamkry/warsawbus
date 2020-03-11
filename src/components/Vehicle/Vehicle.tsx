import React from 'react';
import { Marker } from 'react-map-gl';
import { ReactComponent as Arrow } from 'assets/arrow.svg';
import styled from 'styled-components';

const StyledArrow = styled.svg`
  cursor: pointer;
  fill: #fff;
  stroke: none;
  transform: rotate(${({ rotate }) => rotate}deg);
`;
const Label = styled.div`
  position: absolute;
  color: white;
  transform: translateY(-100%) translateX(-20%);
`;

export interface VehicleProps {
  line: string;
  updateDate?: string;
  latitude: number;
  longitude: number;
  rotate: number;
}

const Vehicle: React.FC<VehicleProps> = ({
  line,
  latitude,
  longitude,
  rotate,
}) => {
  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      captureDrag={false}
      captureDoubleClick={false}
    >
      <Label>{line}</Label>
      <StyledArrow height={15} viewBox="0 0 24 24" rotate={rotate}>
        <Arrow />
      </StyledArrow>
    </Marker>
  );
};

export default Vehicle;
