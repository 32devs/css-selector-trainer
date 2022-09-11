import Header from '../component/layout/Header';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Home(): JSX.Element {

  return (
    <>
      <Header subTitle={ 'HOME' } />
    </>
  );
}

export default Home;
