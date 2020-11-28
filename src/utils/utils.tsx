import { ProductType } from '@components/ProductCard';
import { SortType } from 'src/types';
import { CountPerPage } from './constants';

export const sortItems = (items: Array<ProductType>, type: SortType, pageCount: number) => {
  switch (type) {
    case 'ASC':
      items.sort((a, b) => a.price - b.price);
      break;
    case 'DESC':
      items.sort((a, b) => b.price - a.price);
      break;
    case 'Sort':
      items.sort((a, b) => a.id - b.id);
      break;
    default:
      console.error('not defined sort type');
  }

  return items.slice(0, pageCount * CountPerPage);
};

let done: NodeJS.Timeout | null;
export const throttle = (fnc: Function, time: number) => () => {
  if (!done) {
    done = setTimeout(() => {
      done = null;
      fnc();
    }, time);
  }
};

export const getCurrentScrollPercentage = () => {
  return ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100;
};
