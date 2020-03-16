import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export interface LinesProps {
  bus: string[];
  tram: string[];
}
const initState: LinesProps = {
  bus: [],
  tram: [],
};

const LinesContext = createContext(initState);

export const LinesProvider: React.FC = ({ children }) => {
  const [lines, setLines] = useState(initState);

  useEffect(() => {
    axios.get('/api/lines').then(res => {
      res.data.bus.sort();
      res.data.tram.sort();
      setLines(res.data);
    });
  }, []);

  return (
    <LinesContext.Provider value={lines}>{children}</LinesContext.Provider>
  );
};

export const useLinesContext = () => useContext(LinesContext);
export default LinesContext;
