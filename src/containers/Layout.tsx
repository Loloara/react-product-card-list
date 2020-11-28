import React, { ReactNode } from 'react';
import Header, { HeaderProps } from '@components/Header';
import Content from '@components/Content';
import Head from 'next/head';

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
  headerProps: HeaderProps;
}

const Layout: React.FC<LayoutProps> = ({ children, title, headerProps }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header left={headerProps.left} main={headerProps.main} right={headerProps.right} />
    <Content>{children}</Content>
  </>
);

export default Layout;
