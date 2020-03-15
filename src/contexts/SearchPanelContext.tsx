import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type UseState = [boolean, Dispatch<SetStateAction<boolean>>];
const SearchPanelContext = createContext({} as UseState);

export const SearchPanelProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <SearchPanelContext.Provider value={[open, setOpen]}>
      {children}
    </SearchPanelContext.Provider>
  );
};

export const usePanelContext = () => useContext(SearchPanelContext);
export default SearchPanelContext;
