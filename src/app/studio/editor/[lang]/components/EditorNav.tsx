import styles from '../EditorNav.module.css';

import SaveIcon from '../../../icons/SaveIcon';
import TrashIcon from '../../../icons/TrashIcon';
import UploadIcon from '../../../icons/UploadIcon';

const EditorNav = () => {
  return (
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
          <button className={styles.deleteBtn} disabled>
            <TrashIcon /> Delete
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default EditorNav;
