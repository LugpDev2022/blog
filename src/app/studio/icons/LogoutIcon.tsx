import type { IconProps } from './types';

const LogoutIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M33.3333 20H17.5M30 25L35 20L30 15M21.6666 11.6666V9.99996C21.6666 9.1159 21.3154 8.26806 20.6903 7.64294C20.0652 7.01782 19.2173 6.66663 18.3333 6.66663H9.99996C9.1159 6.66663 8.26806 7.01782 7.64294 7.64294C7.01782 8.26806 6.66663 9.1159 6.66663 9.99996V30C6.66663 30.884 7.01782 31.7319 7.64294 32.357C8.26806 32.9821 9.1159 33.3333 9.99996 33.3333H18.3333C19.2173 33.3333 20.0652 32.9821 20.6903 32.357C21.3154 31.7319 21.6666 30.884 21.6666 30V28.3333'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LogoutIcon;
