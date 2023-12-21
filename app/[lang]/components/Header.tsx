import Image from 'next/image';
import logo from '@/public/logo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href='/'>
        <Image src={logo} alt='logo' width={55} height={55} />
      </Link>
    </header>
  );
};

export default Header;
