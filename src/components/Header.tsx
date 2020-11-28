import React from 'react';
import { MainType } from '../types';
import Logo from '@components/Logo';
import Icon, { IconProps } from '@components/Icon';
import Navigation, { NavigationProps } from './Navigation';

export interface HeaderProps {
  left?: NavigationProps;
  main?: MainType;
  right?: IconProps;
}

const Header: React.FC<HeaderProps> = ({ left, main, right }) => {
  return (
    <header className="wrapper">
      <div className="left-wrap">
        {left && <Navigation value={left.value} setValue={left.setValue} />}
      </div>
      <div className="main-wrap">
        {main && (
          <>
            {main.type === 'Logo' ? (
              <Logo alt="logo" src="Main" size={main.size} />
            ) : main.type === 'Text' ? (
              `${main.content}`
            ) : (
              `undefined HeaderMainType`
            )}
          </>
        )}
      </div>
      <div className="right-wrap">
        {right && <Icon type={right.type} onClick={right.onClick} />}
      </div>
    </header>
  );
};

export default Header;
