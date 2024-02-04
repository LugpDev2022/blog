import type { IconProps } from './types';

const SaveIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 40 40'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M28.3333 5H8.33333C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V11.6667L28.3333 5ZM31.6667 31.6667H8.33333V8.33333H26.95L31.6667 13.05V31.6667ZM20 20C17.2333 20 15 22.2333 15 25C15 27.7667 17.2333 30 20 30C22.7667 30 25 27.7667 25 25C25 22.2333 22.7667 20 20 20ZM10 10H25V16.6667H10V10Z'
        fill='inherit'
      />
    </svg>
  );
};

export default SaveIcon;
