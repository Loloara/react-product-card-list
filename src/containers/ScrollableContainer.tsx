import Logo from '@components/Logo';
import ProductCard, { ProductType } from '@components/ProductCard';
import { sortItems } from '@utils/utils';
import React, { useEffect, useState } from 'react';
import { SortType } from 'src/types';
import loadingEclipse from '@images/loading-eclipse.svg';
import { useProductContext } from 'src/context/context';

export interface ScrollableContainerProps {
  items: Array<ProductType>;
  pageToggle: boolean;
  sortToggle: SortType;
  loadFlag: boolean;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  items,
  pageToggle,
  sortToggle,
  loadFlag,
}) => {
  const { likeProducts, mainPageState, fvPageState } = useProductContext();
  const [filteredItems, setFilteredItems] = useState<Array<ProductType>>([]);

  useEffect(() => {
    if (pageToggle) {
      setFilteredItems(
        sortItems(
          items.filter((v) => likeProducts.has(v.id)),
          sortToggle,
          fvPageState.pageCount
        )
      );
    } else {
      setFilteredItems(sortItems(items, sortToggle, mainPageState.pageCount));
    }
  }, [sortToggle, pageToggle, likeProducts, loadFlag]);

  return filteredItems.length ? (
    <div className={'scrollable-container'}>
      {filteredItems.map((v) => (
        <ProductCard item={v} key={`filteredItem-${v.id}`} />
      ))}
    </div>
  ) : (
    <div className={'empty-wrapper'}>
      {pageToggle ? (
        <>
          <Logo src={'EmptyWish'} alt={'empty'} size={'15rem'} />
        </>
      ) : (
        <img src={loadingEclipse} />
      )}
    </div>
  );
};

export default ScrollableContainer;
