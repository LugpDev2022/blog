'use client';

import { usePathname } from 'next/navigation';

import NavItem from './NavItem';

import HomeIcon from '../icons/HomeIcon';
import DraftIcon from '../icons/DraftIcon';
import EditorIcon from '../icons/EditorIcon';
import LogoutBtn from './LogoutBtn';

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
        <NavItem href='/editor/en' isActive={pathname.includes('/editor')}>
          <EditorIcon /> Editor
        </NavItem>

        <li>
          <LogoutBtn />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
