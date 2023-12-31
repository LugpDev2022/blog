import Image from 'next/image';
import Link from 'next/link';

import type { BlogArticle } from '@/app/types/shared.types';

const Article = ({ title, icon, date, href }: BlogArticle) => {
  return (
    <Link
      href={href}
      className='flex items-center p-[15px] gap-[30px] hover:bg-white/5 rounded-[10px] transition duration-300'
    >
      <Image src={icon.src} alt={icon.alt} width={50} height={50} />
      <div>
        <h3 className='text-xl'>{title}</h3>
        <time className='font-light'>{date}</time>
      </div>
    </Link>
  );
};

export default Article;
