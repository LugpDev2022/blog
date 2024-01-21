import magGlass from '@/public/mag-glass-white.png';
import Image from 'next/image';

const Searchbox = () => {
  return (
    <form className='mt-[60px] relative'>
      <label htmlFor='searchBox'>
        <Image
          src={magGlass}
          alt='magnifying glass'
          width={16}
          height={16}
          className='absolute top-1/2 left-[10px] transform -translate-y-1/2'
        />
      </label>

      <input
        type='text'
        className='w-[210px] rounded-[10px] bg-[#090F3F] text-white px-[10px] py-[7px] font-light outline-none pl-[36px]'
        placeholder='Search'
        id='searchBox'
        name='searchBox'
        autoComplete='off'
      />
    </form>
  );
};

export default Searchbox;
