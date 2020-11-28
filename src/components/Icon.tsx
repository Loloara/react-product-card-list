import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import { IconType } from 'src/types';
import Logo from './Logo';

export interface IconProps {
  type: IconType;
  onClick?: () => void;
  size?: string;
}

const findIcon = (type: IconType, size?: string) => {
  switch (type) {
    case 'FillHome':
      return <AiFillHome />;
    case 'Home':
      return <AiOutlineHome />;
    case 'FillHeart':
      return <FaHeart />;
    case 'Heart':
      return <FaRegHeart />;
    case 'DESC':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Logo src="DESC" alt="desc" size={size} />
          <span style={{ fontFamily: 'Jua', fontWeight: 600, fontSize: '1rem', color: '#f4434d' }}>
            PRICE
          </span>
        </div>
      );
    case 'ASC':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Logo src="ASC" alt="asc" size={size} />
          <span style={{ fontFamily: 'Jua', fontWeight: 600, fontSize: '1rem', color: '#43a5f4' }}>
            PRICE
          </span>
        </div>
      );
    case 'Sort':
      return (
        <div
          style={{
            fontFamily: 'Jua',
            fontWeight: 600,
            fontSize: size,
            minWidth: '4rem',
          }}
        >
          정렬
        </div>
      );
    default:
      console.error('not defined type for icon');
      return;
  }
};

const Icon: React.FC<IconProps> = ({ type, onClick, size = '2.2rem' }) => {
  return (
    <i role={type} onClick={onClick} style={{ width: size }}>
      {findIcon(type, size)}
    </i>
  );
};

export default Icon;
