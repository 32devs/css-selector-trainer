import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Grid, Paper, styled } from '@mui/material';

import CodeMirror from '../../component/CodeMirror';

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  padding: theme.spacing(1),
  minHeight: '700px',
  display: 'flex'
}));

function Id() {
  const [answer, setAnswer] = useState<string>('');
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    setCode(`<div><ul><li>1</li><li>2</li></ul></div>`);
  }, []);

  return (
    <>
      <Grid container item spacing={ 3 } sm={ 12 } md={ 12 }>

        <Grid item sx={{ p: 2 }} sm={ 12 } md ={ 9 }>
          <CodeMirror value={ code } />
        </Grid>

        <Grid item sx={{ p: 2 }} sm={ 12 } md={ 3 }>
          <Item id="answer">terrrd</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Id;