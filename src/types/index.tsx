export interface MainType {
  type: HeaderMainType;
  content?: string;
  size?: string;
}

export type HeaderMainType = 'Logo' | 'Text';

export type IconType = 'FillHome' | 'Home' | 'FillHeart' | 'Heart' | SortType;

export type LogoType = 'Main' | 'EmptyWish' | 'DESC' | 'ASC';

export type SortType = 'Sort' | 'DESC' | 'ASC';
