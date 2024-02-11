'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

import { ArticleType } from '@/src/types/shared.types';

interface Props {
  children: React.ReactNode;
}

export type SearchContextType = {
  results: ArticleType[];
  setResults: Dispatch<SetStateAction<ArticleType[]>>;
};

export const SearchContext = createContext<SearchContextType | null>(null);

const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const [results, setResults] = useState<ArticleType[]>([]);

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      <div className='relative'>{children}</div>
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
