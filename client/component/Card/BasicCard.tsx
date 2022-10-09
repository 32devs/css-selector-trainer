import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

import styles from './Card.module.css';

type CardProps = {
  children?: ReactNode;
  id?: string;
  viewCode?: string;
  half?: boolean;
}

function BasicCard({ children, id, viewCode, half }: CardProps): JSX.Element {
  return (
    viewCode
      ? (
          <Card
            className={ half ? styles['card-half'] : styles['card'] }
            dangerouslySetInnerHTML={{ __html: viewCode as string }}
          >
            { children }
          </Card>
        )
      : (
          <Card
            id={ id }
            className={ half ? styles['card-half'] : styles['card'] }
          >
            { children }
          </Card>
        )
  );
}

export default BasicCard;