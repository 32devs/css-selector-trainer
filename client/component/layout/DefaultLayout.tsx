import { ReactNode, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { NextRouter, useRouter } from 'next/router';

import styled from 'styled-components';

import Footer from './Footer';
import NavBar from './NavBar';

// ----------------------------------------------------------------------

type layout = {
  children: ReactNode;
}

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const StyledMain = styled.main`
  padding: 0 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ----------------------------------------------------------------------

function DefaultLayout({ children }: layout): JSX.Element {

  const router: NextRouter = useRouter();

  const [pageError, setPageError] = useState<boolean>(false);

  useEffect(() => {
    if (!router.asPath.includes(router.pathname)) {
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
      <StyledContainer>
        <StyledMain>
          { children }
        </StyledMain>

      </StyledContainer>
      <Footer />
    </>
  );
}

// ----------------------------------------------------------------------

export default DefaultLayout;