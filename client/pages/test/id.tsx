import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, Stack, Grid, Paper, styled } from '@mui/material';

import { basicSetup, EditorView } from 'codemirror';
import { html } from '@codemirror/lang-html';

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  padding: theme.spacing(1),
  textAlign: 'center',
  minHeight: '700px',
  display: 'flex'
}));

function Id() {
  const [answer, setAnswer] = useState('');

  const editor = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    console.log('asdf')
    const view = new EditorView({
      doc: '<div>asdfasdf</div>',
      extensions: [ basicSetup, html() ],
      parent: editor.current
    })
  }, [])


  return (
    <>
      <Grid container item spacing={ 3 } sm={ 12 } md={ 12 }>

        <Grid item sx={{ p: 1 }} sm={ 12 } md ={ 9 }>
          <Item ref={ editor }></Item>
        </Grid>


        <Grid item sx={{ p: 1 }} sm={ 12 } md={ 3 }>
          <Item id="answer">terrrd</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Id;