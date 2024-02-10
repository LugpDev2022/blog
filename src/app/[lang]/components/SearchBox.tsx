'use client';

import Image from 'next/image';

import { useForm } from '@/src/hooks/useForm';

import magGlass from '@/public/mag-glass.png';
import closeIcon from '@/public/x.png';
import { useState } from 'react';

interface Props {
  isSpanish: boolean;
}

const SearchBox: React.FC<Props> = ({ isSpanish }) => {
  const [results, setResults] = useState([]);
  const { onResetForm, onInputChange, searchBox } = useForm({
    searchBox: '',
  });

  const onSubmitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const resp = await fetch('/api/articles/search/', {
      method: 'POST',
      body: JSON.stringify({ lang: isSpanish ? 'es' : 'en', title: searchBox }),
    });

    if (!resp.ok) return;

    const data = await resp.json();

    setResults(data);
  };

  return (
    <div>
      <form className='relative hidden lg:block' onSubmit={onSubmitForm}>
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
    </div>
  );
};

export default SearchBox;
