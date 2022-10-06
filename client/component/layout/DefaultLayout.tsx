import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

import Footer from './Footer';

import styles from './index.module.css';

type layout = {
  children: ReactNode;
}

function DefaultLayout({ children }: layout): JSX.Element {
  return (
    <>
      <Container>
        <main className={ styles.main }>
          { children }
        </main>

      </Container>
      <Footer />
    </>
  );
}

export default DefaultLayout;