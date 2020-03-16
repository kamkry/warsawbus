import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface SearchPanelContextProps {
  open: [boolean, Dispatch<SetStateAction<boolean>>];
  filter: [string, Dispatch<SetStateAction<string>>];
}
const SearchPanelContext = createContext({} as SearchPanelContextProps);

export const SearchPanelProvider: React.FC = ({ children }) => {
  const value = {
    open: useState(false),
    filter: useState(''),
  };
  return (
    <SearchPanelContext.Provider value={value}>
      {children}
    </SearchPanelContext.Provider>
  );
};

export const usePanelContext = () => useContext(SearchPanelContext);
export default SearchPanelContext;
