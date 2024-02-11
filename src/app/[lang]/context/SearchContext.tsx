'use client';

import { ArticleType } from '@/src/types/shared.types';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export type SearchContextType = {
  results: ArticleType[];
  setResults: Dispatch<SetStateAction<never[]>>;
};

export const SearchContext = createContext<SearchContextType | null>(null);

const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [results, setResults] = useState([]);

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      <div className='relative'>{children}</div>
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
