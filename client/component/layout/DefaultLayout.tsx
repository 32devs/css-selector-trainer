import { ReactNode, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { NextRouter, useRouter } from 'next/router';

import Footer from './Footer';
import NavBar from './NavBar';

import styles from './index.module.css';

type layout = {
  children: ReactNode;
}

function DefaultLayout({ children }: layout): JSX.Element {

  const router: NextRouter = useRouter();

  const [pageError, setPageError] = useState<boolean>(false);

  useEffect(() => {
    if (router.asPath !== router.pathname) {
      setPageError(true);
    }
  }, []);

  return (
    <>
      {
        pageError
          ? <></>
          : <NavBar />
      }
      <Container className={ styles.container }>
        <main className={ styles.main }>
          { children }
        </main>

      </Container>
      <Footer />
    </>
  );
}

export default DefaultLayout;