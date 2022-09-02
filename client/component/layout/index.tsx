import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from './index.module.css';

type layout = {
  children: ReactNode;
}

function Layout({ children }: layout): JSX.Element {
  return (
    <div className={ styles.container }>

      <main className={ styles.main }>
        { children }
      </main>

      <Footer />
    </div>
  );
}

export default Layout;