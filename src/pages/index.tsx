import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Layout from '@containers/Layout';
import { HeaderProps } from '@components/Header';
import ScrollableContainer from '@containers/ScrollableContainer';
import { SortType } from 'src/types';
import { ProductType } from '@components/ProductCard';
import { getMockData } from 'src/apis/mock';
import { NextLoadScrollWeight, ScrollThrottleWeight, TextTitle } from '@utils/constants';
import { getCurrentScrollPercentage, throttle } from '@utils/utils';
import { useProductContext } from 'src/context/context';

interface Props {
  productData: Array<ProductType>;
}

const moveToScroll = (pos: number) => setTimeout(() => scrollTo(0, pos), 0);

const MainPage: NextPage<Props> = ({ productData }) => {
  const {
    setMainPageState,
    setFvPageState,
    mainPageState,
    fvPageState,
    likeProducts,
  } = useProductContext();
  const [pageToggle, setPageToggle] = useState<boolean>(false);
  const [sortToggle, setSortToggle] = useState<SortType>('Sort');
  const [loadFlag, setLoadFlag] = useState<boolean>(false);
  const MaxPageCount = Math.ceil(productData.length / 10);
  const MaxLikePageCount = Math.ceil(likeProducts.size / 10);

  useEffect(() => {
    const scrollHandler = () => {
      const currentScrollPercentage = getCurrentScrollPercentage();
      if (currentScrollPercentage >= NextLoadScrollWeight) {
        if (pageToggle) {
          if (fvPageState.pageCount + 1 > MaxLikePageCount) return;
          setFvPageState({ pos: fvPageState.pos, pageCount: fvPageState.pageCount + 1 });
          setLoadFlag((prevLoadFlag) => !prevLoadFlag);
        } else {
          if (mainPageState.pageCount + 1 > MaxPageCount) return;
          setMainPageState({ pos: mainPageState.pos, pageCount: mainPageState.pageCount + 1 });
          setLoadFlag((prevLoadFlag) => !prevLoadFlag);
        }
      }
    };

    const throttleScrollHandler = throttle(scrollHandler, ScrollThrottleWeight);
    document.addEventListener('scroll', throttleScrollHandler);
    document.dispatchEvent(new CustomEvent('scroll'));
    return () => document.removeEventListener('scroll', throttleScrollHandler);
  }, [loadFlag, pageToggle]);

  const changePage = (value: boolean) => {
    setPageToggle(value);
    if (value) {
      setMainPageState({ pos: scrollY, pageCount: mainPageState.pageCount });
      moveToScroll(fvPageState.pos);
    } else {
      setFvPageState({ pos: scrollY, pageCount: fvPageState.pageCount });
      moveToScroll(mainPageState.pos);
    }
  };

  const filterDropBar = () => {
    setSortToggle((prevToggle) => {
      switch (prevToggle) {
        case 'Sort':
          return 'ASC';
        case 'ASC':
          return 'DESC';
        case 'DESC':
          return 'Sort';
        default:
          console.error('not defined filter toggle');
          return 'Sort';
      }
    });
    scrollTo(0, 0);
  };

  const headerProps: HeaderProps = {
    left: { value: pageToggle, setValue: changePage },
    main: { type: 'Text', content: TextTitle, size: '12rem' },
    right: { type: sortToggle, size: !sortToggle ? '3.5rem' : '2rem', onClick: filterDropBar },
  };

  return (
    <Layout title={TextTitle} headerProps={headerProps}>
      <ScrollableContainer
        items={productData}
        pageToggle={pageToggle}
        sortToggle={sortToggle}
        loadFlag={loadFlag}
      />
    </Layout>
  );
};

export const getServerSideProps = async () => {
  let productData = [] as Array<ProductType>;
  try {
    productData = (await getMockData()).map((v) => {
      return {
        id: v.id,
        price: parseInt(v.price),
        name: v.name,
        thumbnail: v.thumbnail,
        category: '한인민박 · 오사카',
        reviews: Math.floor(parseInt(v.price) / 200),
      };
    });
  } catch (err) {
    console.error(err);
  } finally {
    return {
      props: {
        productData,
      },
    };
  }
};

export default MainPage;
