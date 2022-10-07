import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

type CardProps = {
  children?: ReactNode;
  id?: string;
  viewCode?: string;
}

function Card2({ children, id, viewCode }: CardProps): JSX.Element {
  return (
    viewCode
      ? (
          <Card
            style={{
              minHeight: '700px',
              width: '100%',
              display: 'flex'
            }}
            dangerouslySetInnerHTML={{ __html: viewCode as string }}
          >
            { children }
          </Card>
        )
      : (
          <>
          </>
        )
  )
  return (
    viewCode
      ? (
          <Card body
            dangerouslySetInnerHTML={{ __html: viewCode as string }}
          >
            { children }
          </Card>
        )
      : (
          <Card body
          >
            { children }
          </Card>
        )
  );
}

export default Card2;