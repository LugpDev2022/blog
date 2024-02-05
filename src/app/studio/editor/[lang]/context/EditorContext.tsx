'use client';

import { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

const initialState = {
  en: {
    title: '',
    content: '',
  },
  es: {
    title: '',
    content: '',
  },
};

export const EditorContext = createContext(initialState);

const EditorContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <EditorContext.Provider value={initialState}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorContextProvider;
