import type { AppContext, AppInitialProps, AppProps } from 'next/app';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
import { GlobalStyle } from '../styles/global';

import DefaultLayout from '../component/layout/DefaultLayout';
// nextjs에서의 fontawesome bug CSS가 로드되기 전에 아이콘이 로드되므로 크기가 적용이 안됨 해결
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 부트스트랩 사용은 아래 SSRProvider 필요
    <SSRProvider>
      <DefaultLayout>
        <GlobalStyle />
        <Component {...pageProps} />
      </DefaultLayout>
    </SSRProvider>
    
  );
}

export default MyApp;
