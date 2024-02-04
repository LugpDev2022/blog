import type { IconProps } from './types';

const UploadIcon: React.FC<IconProps> = (props) => {
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
        d='M18.375 33V19.7563L14.15 23.9812L11.875 21.625L20 13.5L28.125 21.625L25.85 23.9812L21.625 19.7563V33H18.375ZM7 15.125V10.25C7 9.35625 7.3185 8.59142 7.9555 7.9555C8.5925 7.31958 9.35733 7.00108 10.25 7H29.75C30.6437 7 31.4091 7.3185 32.0461 7.9555C32.6831 8.5925 33.0011 9.35733 33 10.25V15.125H29.75V10.25H10.25V15.125H7Z'
        fill='inherit'
      />
    </svg>
  );
};

export default UploadIcon;
