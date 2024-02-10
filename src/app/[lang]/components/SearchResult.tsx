import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  href: string;
  icon: {
    alt: string;
    src: string;
  };
}

const SearchResult: React.FC<Props> = ({ title, href, icon }) => {
  return (
    <li className='hover:bg-white/5 rounded-[10px]'>
      <Link href={href} className='flex gap-2 transition items-start p-2 '>
        <Image
          src={icon.src}
          alt={icon.alt}
          width={30}
          height={30}
          className='aspect-square'
        />
        <h5>{title}</h5>
      </Link>
    </li>
  );
};

export default SearchResult;
