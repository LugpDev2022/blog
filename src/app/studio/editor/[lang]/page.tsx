import SaveIcon from '../../icons/SaveIcon';
import TrashIcon from '../../icons/TrashIcon';
import UploadIcon from '../../icons/UploadIcon';
import styles from './styles.module.css';

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

      <nav className='mt-[30px]'>
        <ul className='flex gap-[30px]'>
          <li className={styles.selectContainer}>
            <select
              name='programming-langs'
              className={styles.select}
              id='programming-langs'
            >
              <option value='JavaScript'>JavaScript</option>
              <option value='JavaScript'>HTML</option>
            </select>
          </li>
          <li>
            <button className={styles.primaryBtn} disabled>
              <SaveIcon /> Save
            </button>
          </li>
          <li>
            <button className={styles.primaryBtn} disabled>
              <UploadIcon /> Publish
            </button>
          </li>
          <li>
            <button className={styles.deleteBtn}>
              <TrashIcon /> Delete
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default page;
