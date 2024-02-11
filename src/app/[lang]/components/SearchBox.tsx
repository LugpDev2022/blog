'use client';

import Image from 'next/image';

import { useForm } from '@/src/hooks/useForm';

import magGlass from '@/public/mag-glass.png';
import closeIcon from '@/public/x.png';
import { useContext, useEffect, useState } from 'react';
import { SearchContext, SearchContextType } from '../context/SearchContext';
import { ArticleType } from '@/src/types/shared.types';

interface Props {
  isSpanish: boolean;
}

const SearchBox: React.FC<Props> = ({ isSpanish }) => {
  const [resultsBackup, setResultsBackup] = useState<ArticleType[]>([]);
  const { setResults, results } = useContext(
    SearchContext
  ) as SearchContextType;
  const { onResetForm, onInputChange, searchBox } = useForm({
    searchBox: '',
  });

  const getArticles = async () => {
    if (!searchBox) return setResults([]);

    const resp = await fetch('/api/articles/search/', {
      method: 'POST',
      body: JSON.stringify({ lang: isSpanish ? 'es' : 'en', title: searchBox }),
    });

    if (!resp.ok) return;

    const data = await resp.json();

    setResults(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getArticles();
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBox]);

  const onBlur = () => {
    setTimeout(() => {
      setResultsBackup(results);
      setResults([]);
    }, 500);
  };

  const onFocus = () => {
    setResults(resultsBackup);
  };

  return (
    <form
      className='relative hidden lg:block'
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor='searchBox'>
        <Image
          src={magGlass}
          alt={isSpanish ? 'lupa' : 'magnifying glass'}
          width={27}
          height={27}
          className='absolute top-1/2 left-[10px] transform -translate-y-1/2'
        />
      </label>

      <input
        type='text'
        placeholder={isSpanish ? 'Buscar' : 'Search'}
        className='searchBox'
        id='searchBox'
        name='searchBox'
        autoComplete='off'
        onChange={onInputChange}
        value={searchBox}
        onBlur={onBlur}
        onFocus={onFocus}
      />

      <button
        type='reset'
        onClick={onResetForm}
        className={`${
          searchBox.length < 1 ? 'hidden' : 'block'
        } absolute top-1/2 right-[10px] transform -translate-y-1/2`}
      >
        <Image src={closeIcon} width={20} height={20} alt='x icon' />
      </button>
    </form>
  );
};

export default SearchBox;
