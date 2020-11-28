import React, { useState, ReactNode, useContext } from 'react';

interface PageStateInterface {
  pos: number;
  pageCount: number;
}

interface Props {
  children: ReactNode;
}

interface ContextType {
  likeProducts: Set<number>;
  setLikeProducts: Function;
  mainPageState: PageStateInterface;
  setMainPageState: Function;
  fvPageState: PageStateInterface;
  setFvPageState: Function;
}

const defaultValue = {
  likeProducts: new Set<number>(),
  setLikeProducts: () => {},
  mainPageState: { pos: 0, pageCount: 1 },
  setMainPageState: () => {},
  fvPageState: { pos: 0, pageCount: 1 },
  setFvPageState: () => {},
};

const ProductContext = React.createContext<ContextType>(defaultValue);

export const useProductContext = () => useContext(ProductContext);

export const Provider: React.FC<Props> = (props) => {
  const [likeProducts, setLikeProducts] = useState(new Set<number>());
  const [mainPageState, setMainPageState] = useState<PageStateInterface>({ pos: 0, pageCount: 1 });
  const [fvPageState, setFvPageState] = useState<PageStateInterface>({ pos: 0, pageCount: 1 });

  return (
    <ProductContext.Provider
      value={{
        likeProducts: likeProducts,
        setLikeProducts: setLikeProducts,
        mainPageState: mainPageState,
        setMainPageState: setMainPageState,
        fvPageState: fvPageState,
        setFvPageState: setFvPageState,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
