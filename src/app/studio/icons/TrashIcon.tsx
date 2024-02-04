import type { IconProps } from './types';

const TrashIcon: React.FC<IconProps> = (props) => {
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
        d='M31.6667 6.66667H25.8334L24.1667 5H15.8334L14.1667 6.66667H8.33337V10H31.6667M10 31.6667C10 32.5507 10.3512 33.3986 10.9764 34.0237C11.6015 34.6488 12.4493 35 13.3334 35H26.6667C27.5508 35 28.3986 34.6488 29.0237 34.0237C29.6489 33.3986 30 32.5507 30 31.6667V11.6667H10V31.6667Z'
        fill='inherit'
      />
    </svg>
  );
};

export default TrashIcon;
