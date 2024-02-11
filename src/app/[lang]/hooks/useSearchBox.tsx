import { useContext, useEffect, useState } from 'react';

import { useForm } from '@/src/hooks/useForm';
import { SearchContext, SearchContextType } from '../context/SearchContext';
import { ArticleType } from '@/src/types/shared.types';

const useSearchBox = (isSpanish: boolean) => {
  const { setResults } = useContext(SearchContext) as SearchContextType;
  const { onResetForm, onInputChange, searchBox } = useForm({
    searchBox: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      getArticles();
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBox]);

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

  const onBlur = () => {
    setTimeout(() => {
      setResults([]);
    }, 500);
  };

  const onFocus = () => {
    getArticles();
  };

  return {
    inputHandlers: {
      onBlur,
      onFocus,
      onResetForm,
      onChange: onInputChange,
    },
    searchBox,
  };
};

export default useSearchBox;
