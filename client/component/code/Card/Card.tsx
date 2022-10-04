import { Paper, styled } from "@mui/material";
import { forwardRef, MutableRefObject, ReactNode } from "react";

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  padding: theme.spacing(1),
  minHeight: '700px',
  display: 'flex'
}));

type CardProps = {
  children?: ReactNode;
  id?: string;
  sx?: any;
  viewCode?: string;
}

function Card({ children, id, sx, viewCode }: CardProps): JSX.Element {
  return (
    viewCode
      ? (
          <Item
            id={ id }
            sx={ sx }
            dangerouslySetInnerHTML={{ __html: viewCode as string }}
          >
            { children }
          </Item>
        )
      : (
          <Item
            id={ id }
            sx={ sx }
          >
            { children }
          </Item>
        )
  )
}

export default Card;