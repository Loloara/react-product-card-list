import React, { ReactNode } from 'react';

export interface ContentProps {
  children?: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <div className={'content'}>
    <div className={'wrapper'}>{children}</div>
  </div>
);

export default Content;
