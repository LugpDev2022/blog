import Link from 'next/link';

import type { Icon } from '@/src/types/shared.types';

interface Props {
  title: string;
  date: string;
  href: string;
  icon: Icon;
}

const Article: React.FC<Props> = ({ icon, title, date, href }) => (
  <Link
    href={href}
    className='flex items-center p-[15px] gap-[30px] hover:bg-white/5 rounded-[10px] transition duration-300'
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={icon.src} alt={icon.alt} className='w-[50px] h-[50px]' />
    <div>
      <h3 className='text-xl'>{title}</h3>
      <time className='font-light'>{date}</time>
    </div>
  </Link>
);

export default Article;
