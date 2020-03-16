import React, { createContext, useContext, useEffect, useState } from 'react';

const SelectedBusesContext = createContext(
  {} as [Set<string>, (name: string) => void]
);

export const SelectedBusesProvider: React.FC = ({ children }) => {
  const [selected, setSelected] = useState(new Set<string>());

  useEffect(() => {
    const selectedBuses = localStorage.getItem('selectedBuses');
    if (selectedBuses) {
      setSelected(new Set(JSON.parse(selectedBuses)));
    }
  }, []);

  const toggle = (name: string) => {
    const updated = new Set(selected);
    if (!selected.has(name)) {
      updated.add(name);
    } else {
      updated.delete(name);
    }
    setSelected(updated);
    localStorage.setItem('selectedBuses', JSON.stringify([...updated]));
  };

  return (
    <SelectedBusesContext.Provider value={[selected, toggle]}>
      {children}
    </SelectedBusesContext.Provider>
  );
};

export const useSelectedBusesContext = () => useContext(SelectedBusesContext);
export default SelectedBusesContext;
