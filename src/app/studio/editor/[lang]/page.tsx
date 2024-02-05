import EditorNav from './components/EditorNav';
import { getDictionary } from '@/src/app/[lang]/lib/getDictionary';
import { Locale } from '@/src/types/shared.types';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

interface Props {
  params: { lang: Locale };
}

const EditorPage: React.FC<Props> = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);

  return (
    <div className='mt-[35px] mx-[60px]'>
      <header className='px-5 py-[10px] bg-white/5 rounded-[10px] text-xl flex'>
        <label htmlFor='title'>{dictionary.editor.title}:&nbsp;</label>
        <input
          type='text'
          name='title'
          id='title'
          className='outline-none grow bg-transparent font-light'
        />
      </header>

      <EditorNav />
    </div>
  );
};

export default EditorPage;
