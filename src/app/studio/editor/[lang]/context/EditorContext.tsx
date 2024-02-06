'use client';

import { ChangeEvent, createContext, useReducer } from 'react';
import editorReducer from './editorReducer';
import { Locale } from '@/src/types/shared.types';

interface Props {
  children: React.ReactNode;
}

export type EditorReducerState = {
  en: {
    title: string;
    content: string;
  };
  es: {
    title: string;
    content: string;
  };
};

const initialState: EditorReducerState = {
  en: {
    title: 'Titulo en ingles',
    content: '',
  },
  es: {
    title: 'Titulo en español',
    content: '',
  },
};

export type EditorContext = {
  state: EditorReducerState;
  onTitleChange: (lang: Locale, e: ChangeEvent<HTMLInputElement>) => void;
};

export const EditorContext = createContext<EditorContext | null>(null);

const EditorContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, initialState);

  const onTitleChange = (
    lang: Locale,
    { target }: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: 'EDIT_TITLE',
      payload: { title: target.value, lang },
    });
  };

  return (
    <EditorContext.Provider value={{ state, onTitleChange }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
