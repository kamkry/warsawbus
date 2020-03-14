export { default } from './Bus';

export interface BusProps {
  number?: string;
  line: string;
  time?: string;
  latitude: number;
  longitude: number;
  rotate: number;
}
