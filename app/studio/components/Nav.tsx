import { usePathname } from 'next/navigation';

import NavItem from './NavItem';

import HomeIcon from '../icons/HomeIcon';
import DraftIcon from '../icons/DraftIcon';
import EditorIcon from '../icons/EditorIcon';
import LogoutIcon from '../icons/LogoutIcon';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='w-full mt-10'>
      <ul>
        <NavItem href='/' isActive={pathname === '/studio'}>
          <HomeIcon /> Home
        </NavItem>
        <NavItem href='/drafts' isActive={pathname.includes('/drafts')}>
          <DraftIcon /> Drafts
        </NavItem>
        <NavItem href='/editor' isActive={pathname.includes('/editor')}>
          <EditorIcon /> Editor
        </NavItem>

        <li>
          <button className='flex w-full gap-5 py-[10px] pl-5 items-center transition duration-300 hover:bg-[#ff0000]'>
            <LogoutIcon /> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
