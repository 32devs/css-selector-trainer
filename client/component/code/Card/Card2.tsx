import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

import styles from './Card.module.css';

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
            className={ styles.card }
            dangerouslySetInnerHTML={{ __html: viewCode as string }}
          >
            { children }
          </Card>
        )
      : (
          <Card
            id={ id }
            className={ styles.card }
          >
            { children }
          </Card>
        )
  );
}

export default Card2;