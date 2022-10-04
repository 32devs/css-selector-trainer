import Header from '../component/layout/Header';
import TopNav from '../component/layout/TopNav';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Home(): JSX.Element {

  return (
    <>
      <Header subTitle={ 'HOME' } />
      <TopNav />
    </>
  );
}

export default Home;
