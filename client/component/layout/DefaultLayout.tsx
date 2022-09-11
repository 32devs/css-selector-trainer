import { ReactNode } from 'react';

import Footer from './Footer';

import styles from './index.module.css';

type layout = {
  children: ReactNode;
}

function DefaultLayout({ children }: layout): JSX.Element {
  return (
    <>
      <div className={ styles.container }>

        <main className={ styles.main }>
          { children }
        </main>

      </div>

      <Footer />
    </>
  );
}

export default DefaultLayout;