import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavItem: React.FC<Props> = ({ href, children, isActive }) => {
  const styles = isActive
    ? 'text-cyan-300 fill-cyan-300 bg-[#090F3F]'
    : 'fill-white hover:bg-white/5';

  return (
    <li>
      <Link
        href={`/studio${href}`}
        className={`flex gap-5 py-[10px] pl-5 items-center transition duration-300 ${styles}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
