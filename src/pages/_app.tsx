import '../sass/main.scss';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Provider } from '../context';
import { useRouter } from 'next/router';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();

  if (!router.pathname.startsWith('/')) {
    router.replace('/');
  }

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
};

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
