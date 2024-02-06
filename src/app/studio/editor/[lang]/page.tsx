'use client';

import { useContext } from 'react';
import EditorNav from './components/EditorNav';
import { Locale } from '@/src/types/shared.types';
import { EditorContext } from './context/EditorContext';

interface Props {
  params: { lang: Locale };
}

const EditorPage: React.FC<Props> = ({ params: { lang } }) => {
  const { state, onTitleChange } = useContext(EditorContext) as EditorContext;

  return (
    <div className='mt-[35px] mx-[60px]'>
      <header className='px-5 py-[10px] bg-white/5 rounded-[10px] text-xl flex'>
        <label htmlFor='title'>
          {lang === 'es' ? 'Título' : 'Title'}:&nbsp;
        </label>
        <input
          type='text'
          name='title'
          id='title'
          className='outline-none grow bg-transparent font-light'
          value={state[lang].title}
          onChange={(e) => onTitleChange(lang, e)}
        />
      </header>

      <EditorNav />
    </div>
  );
};

export default EditorPage;
