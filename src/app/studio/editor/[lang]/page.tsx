import EditorNav from './components/EditorNav';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

const page = () => {
  return (
    <div className='mt-[35px] mx-[60px]'>
      <header className='px-5 py-[10px] bg-white/5 rounded-[10px] text-xl flex'>
        <label htmlFor='title'>Title:&nbsp;</label>
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

export default page;
