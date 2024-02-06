import { Locale } from '@/src/types/shared.types';
import { EditorReducerState } from './EditorContext';

type Action = {
  type: 'EDIT_TITLE';
  payload?: any;
};

const editorReducer = (
  state: EditorReducerState,
  action: Action
): EditorReducerState => {
  switch (action.type) {
    case 'EDIT_TITLE':
      const { lang, title }: { lang: Locale; title: string } = action.payload;

      return {
        ...state,
        [lang]: {
          ...state[lang],
          title,
        },
      };

    default:
      return state;
  }
};

export default editorReducer;
