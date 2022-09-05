import '../styles/globals.css';
import type { AppProps } from 'next/app';

import DefaultLayout from '../component/layout/DefaultLayout';

// nextjs에서의 fontawesome bug CSS가 로드되기 전에 아이콘이 로드되므로 크기가 적용이 안됨 해결
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
