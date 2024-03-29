import type { IconProps } from './types';

const EditorIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 40 40'
      fill='inherit'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M23.4333 15L25 16.5667L9.86667 31.6667H8.33333V30.1333L23.4333 15ZM29.4333 5C29.0167 5 28.5833 5.16667 28.2667 5.48333L25.2167 8.53333L31.4667 14.7833L34.5167 11.7333C35.1667 11.0833 35.1667 10 34.5167 9.38333L30.6167 5.48333C30.2833 5.15 29.8667 5 29.4333 5ZM23.4333 10.3167L5 28.75V35H11.25L29.6833 16.5667L23.4333 10.3167Z'
        fill='inherit'
      />
    </svg>
  );
};

export default EditorIcon;
