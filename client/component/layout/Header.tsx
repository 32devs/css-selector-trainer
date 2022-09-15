import Head from 'next/head'

// ----------------------------------------------------------------------

type headerProps = {
  subTitle: string
};

// ----------------------------------------------------------------------

function Header({ subTitle }: headerProps): JSX.Element {
  return (
    <Head>
      <title>{ `CST | ${ subTitle }` }</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

// ----------------------------------------------------------------------

export default Header;