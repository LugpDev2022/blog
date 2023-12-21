import magGlass from '@/public/mag-glass.png';
import Image from 'next/image';

const SearchBox = () => {
  //TODO: Add an X button to delete content

  return (
    <form className='relative hidden md:block'>
      <label htmlFor='SearchBox'>
        <Image
          src={magGlass}
          alt='magnifying glass'
          width={27}
          height={27}
          className='absolute top-1/2 left-[10px] transform -translate-y-1/2'
        />
      </label>

      <input
        type='text'
        placeholder='Search'
        className='searchBox'
        id='SearchBox'
        name='SearchBox'
        autoComplete='off'
      />
    </form>
  );
};

export default SearchBox;
