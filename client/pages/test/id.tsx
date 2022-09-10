import { useEffect, useState } from 'react';
import { Card, CardContent, Stack, Grid, Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  padding: theme.spacing(1),
  textAlign: 'center',
  minHeight: '700px',
  display: 'flex'
}));

function Id() {
  const [answer, setAnswer] = useState('');

  useEffect(() => {

  }, [ answer ]);

  return (
    <>
      <Grid container spacing={ 2 } md={ 12 }>
        <Grid  item md={ 8 }>
          <Item id="question">ttt</Item>
        </Grid>

        <Grid item md={ 4 }>
          <Item id="answer">terrrd</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Id;