'use client';

import { usePathname, useRouter } from 'next/navigation';
import { GrLanguage } from 'react-icons/gr';

interface Props {
  isSpanish: boolean;
}

const LanguageSwitch: React.FC<Props> = ({ isSpanish }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = () => {
    let href = '';

    if (isSpanish) {
      const enPathname = pathname.substring(3);
      href = enPathname.length < 1 ? '/' : enPathname;
    } else {
      href = `/es${pathname}`;
    }

    router.push(href);
    router.refresh();
  };

  return (
    <div className='flex items-center gap-2 md:order-1 md:ml-[30px]'>
      <GrLanguage size={24} />

      <select name='lang' className='bg-[#090f3f]' onChange={handleChange}>
        <option value='es' selected={isSpanish}>
          Español
        </option>

        <option value='en' selected={!isSpanish}>
          English
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
