import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Header from '../component/layout/Header';
import Footer from '../component/layout/Footer';

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header subTitle='HOME' />

      <main className={styles.main}>
        
      </main>

      <Footer />
    </div>
  )
}

export default Home
