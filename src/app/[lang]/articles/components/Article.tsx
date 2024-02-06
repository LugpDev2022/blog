import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  icon: {
    src: string;
    alt: string;
  };
  href: string;
}

const Article: React.FC<Props> = ({ title, icon, href }) => {
  return (
    <Link
      href={href}
      className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-[20px] flex flex-col justify-center items-center gap-[30px] hover:bg-white/5 rounded-[10px] py-[20px] px-[10px] transition'
    >
      <Image src={icon.src} alt={icon.alt} width={70} height={70} />
      <h3 className='text-xl text-center'>{title}</h3>
    </Link>
  );
};

export default Article;
