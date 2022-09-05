import { NextRouter, useRouter } from 'next/router';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
// material
import { Button } from '@mui/material';
// components
import Header from '../component/layout/Header';
import { useEffect } from 'react';


// 404 page는 next.js 에서 알아서 static 파일로 빌드해줌
function NotFound(): JSX.Element {
  const router: NextRouter = useRouter();

  const movePreviousPage = () => {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back();
    });
  }

  useEffect(() => {
    movePreviousPage();
  }, []);

  return (
    <>
      <Header subTitle={ '404' } />
      <div style={{ textAlign: 'center' }}>
        <FontAwesomeIcon icon={ faTriangleExclamation } size="4x" />
        <h2>404 Not Found</h2>
        <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
        <Button variant="contained" onClick={ () => router.back() }>뒤로 가기</Button>
      </div>
      
    </>
  );
}

function getStaticProps() {
  return {

  }
}

export default NotFound;