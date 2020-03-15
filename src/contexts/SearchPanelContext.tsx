import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

type SetState = [boolean | undefined, Dispatch<SetStateAction<boolean>>] | null;

const SearchPanelContext = createContext(null as SetState);

const SearchPanelProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <SearchPanelContext.Provider value={[open, setOpen]}>
      {children}
    </SearchPanelContext.Provider>
  );
};

export default SearchPanelProvider;
