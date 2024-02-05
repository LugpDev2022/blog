import EditorContextProvider from './context/EditorContext';

const EditorLayout = ({ children }: { children: React.ReactNode }) => {
  return <EditorContextProvider>{children}</EditorContextProvider>;
};

export default EditorLayout;
