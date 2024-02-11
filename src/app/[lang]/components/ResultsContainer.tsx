'use client';

import { useContext } from 'react';

import SearchResult from './SearchResult';
import { SearchContext, SearchContextType } from '../context/SearchContext';
import { buildArticleUrl } from '../../utils';
import { Locale } from '@/src/types/shared.types';

interface Props {
  lang: Locale;
}

const ResultsContainer: React.FC<Props> = ({ lang }) => {
  const { results } = useContext(SearchContext) as SearchContextType;

  if (results.length <= 0) return <></>;

  return (
    <ul className='absolute top-16 left-0 border border-cyan-300 bg-[#090F3F]/95 w-full p-2 rounded-lg hidden lg:flex-col gap-2 lg:flex'>
      {results.map((result) => (
        <SearchResult
          key={result._id}
          href={buildArticleUrl(lang, result._id)}
          title={result[lang].title}
          icon={{ src: result.icon.src, alt: result.icon.alt }}
        />
      ))}
    </ul>
  );
};

export default ResultsContainer;
