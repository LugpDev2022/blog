import Image from 'next/image';

import magGlass from '@/public/mag-glass.png';

interface Props {
  isSpanish: boolean;
}

const SearchBox: React.FC<Props> = ({ isSpanish }) => {
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
        placeholder={isSpanish ? 'Buscar' : 'Search'}
        className='searchBox'
        id='SearchBox'
        name='SearchBox'
        autoComplete='off'
      />
    </form>
  );
};

export default SearchBox;
