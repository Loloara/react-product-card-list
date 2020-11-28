import React, { useEffect, useRef } from 'react';
import Icon from './Icon';

export interface NavigationProps {
  value: boolean;
  setValue: Function;
}

const Navigation: React.FC<NavigationProps> = ({ value, setValue }) => {
  const homeBtn = useRef<HTMLButtonElement>(null);
  const wishlistBtn = useRef<HTMLButtonElement>(null);
  const setHome = setValue.bind(null, false);
  const setWish = setValue.bind(null, true);

  useEffect(() => {
    if (value) {
      wishlistBtn.current?.classList.add('clicked');
      homeBtn.current?.classList.remove('clicked');
    } else {
      homeBtn.current?.classList.add('clicked');
      wishlistBtn.current?.classList.remove('clicked');
    }
  }, [value]);

  return (
    <div className={'navi-toggle'}>
      <button id={'btn-home'} ref={homeBtn} onClick={setHome}>
        {!value ? <Icon type={'FillHome'} /> : <Icon type={'Home'} />}
      </button>
      <button id={'btn-wish'} ref={wishlistBtn} onClick={setWish}>
        {value ? <Icon type={'FillHeart'} /> : <Icon type={'Heart'} />}
      </button>
    </div>
  );
};

export default Navigation;
