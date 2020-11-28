import React from 'react';
import { useProductContext } from 'src/context/context';
import Icon from './Icon';
import Img from './Img';

export interface ProductType {
  id: number;
  price: number;
  name: string;
  thumbnail: string;
  category: string;
  reviews: number;
}

export interface ProductCardProps {
  item: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const { likeProducts, setLikeProducts } = useProductContext();
  const setLike = setLikeProducts.bind(
    null,
    new Set<number>([...likeProducts, item.id])
  );
  const dislike = setLikeProducts.bind(
    null,
    new Set<number>([...likeProducts].filter((v) => v !== item.id))
  );

  return (
    <div className={'product-card'}>
      <div className={'image-wrapper'}>
        <Img src={item.thumbnail} alt={'product'} />
        <div className={'heart-icon'}>
          {likeProducts.has(item.id) ? (
            <Icon type={'FillHeart'} onClick={dislike} size={'1.7rem'} />
          ) : (
            <Icon type={'Heart'} onClick={setLike} size={'1.7rem'} />
          )}
        </div>
      </div>
      <div className={'info-wrapper'}>
        <span className={'small-info'}>{item.category}</span>
        <div className={'multi-row'}>{item.name}</div>
        <span>
          <span>{'★★★★★'}</span>
          <span className={'small-info'}>{` ${item.reviews}`}</span>
        </span>
        <span>
          <span>{`${item.price.toLocaleString()}원`}</span>
          <span className={'small-info'}>{` / 1박`}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
