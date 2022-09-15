import { MutableRefObject, useEffect, useRef, useState, KeyboardEvent } from 'react';
import { Grid, Paper, Typography, TextField, styled } from '@mui/material';

import CodeMirror from '../../component/CodeMirror';

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  padding: theme.spacing(1),
  minHeight: '700px',
  display: 'flex'
}));

const testString: string = `<div>
  <ul>
    <li id="first">1</li>
    <li id="twice">2</li>
  </ul>
</div>`;

function Id() {
  const [answer, setAnswer] = useState<string>('');

  const [code, setCode] = useState<string>('');
  const [viewCode, setViewCode] = useState<string>('');

  const getAnswer = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      setAnswer(target.value);
    }
  }

  useEffect(() => {
    setCode(testString);
    setViewCode(testString);
  }, []);

  useEffect(() => {
    const errorReg = /^[\#\.\.\[\]\s]+$|^$/;

    document.querySelector('#view')?.querySelectorAll('.selected').forEach(item => item.classList.remove('selected'));
    if (!errorReg.test(answer)) {
      document.querySelector(`#view ${ answer }`)?.classList.add('selected');
    }
  }, [answer])

  return (
    <>
      <Grid container spacing={ 3 }>

        <Grid container sx={{ p: 1 }} sm={ 12 } md={ 9 }>
          <Grid item sx={{ p: 2 }} sm={ 12 } md={ 6 }>
            <Typography variant="overline">VIEW</Typography>
            <Item id="view" dangerouslySetInnerHTML={{ __html: code }}></Item>
          </Grid>
          <Grid item sx={{ p: 2 }} sm={ 12 } md={ 6 }>
            <Typography variant="overline">CODE</Typography>
            <CodeMirror value={ code } />
          </Grid>
        </Grid>

        <Grid item sx={{ p: 2 }} sm={ 12 } md={ 3 }>
          <Typography variant="overline">ANSWER</Typography>
          <Item id="answer">
            <TextField
              label="CSS Query"
              variant="outlined"
              onKeyUp={ getAnswer }
            />
          </Item>
        </Grid>

      </Grid>
    </>
  );
}

export default Id;