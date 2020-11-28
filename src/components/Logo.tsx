import React from 'react';
import { LogoType } from 'src/types';
import MainLogo from '@images/main.svg';
import EmptyWish from '@images/empty-wish.svg';
import DESC from '@images/desc.svg';
import ASC from '@images/asc.svg';

export interface LogoProps {
  src: LogoType;
  alt: string;
  size?: string;
}

const Logo: React.FC<LogoProps> = ({ alt, src, size = '10rem', ...props }) => {
  let imageSrc = '';
  switch (src) {
    case 'Main':
      imageSrc = MainLogo;
      break;
    case 'EmptyWish':
      imageSrc = EmptyWish;
      break;
    case 'DESC':
      imageSrc = DESC;
      break;
    case 'ASC':
      imageSrc = ASC;
      break;
    default:
      console.error('undefined Logo Type');
  }
  return (
    <img
      style={{ display: 'inline-block', width: size, boxSizing: 'border-box' }}
      alt={alt}
      src={imageSrc}
      {...props}
    />
  );
};

export default Logo;
