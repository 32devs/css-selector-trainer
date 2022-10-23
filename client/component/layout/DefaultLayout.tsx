import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

import Error from 'next/error';

import Footer from './Footer';
import NavBar from './NavBar';

import styles from './index.module.css';

type layout = {
  children: ReactNode;
}

function DefaultLayout({ children }: layout): JSX.Element {
  return (
    <>
      <NavBar />
      <Container fluid>
        <main className={ styles.main }>
          { children }
        </main>

      </Container>
      <Footer />
    </>
  );
}

export default DefaultLayout;