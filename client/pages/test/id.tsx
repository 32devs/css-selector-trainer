import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { Grid, Paper, Typography, styled, InputBase, IconButton } from '@mui/material';

import CodeMirror from '../../component/CodeMirror';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Item = styled(Paper)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#1A2027' : '#FFF',
  padding: theme.spacing(1),
  minHeight: '700px',
  display: 'flex'
}));

const testSolution: string = '#first';
const testString: string = `<div>
  <ul>
    <li id="first">1</li>
    <li id="twice">2</li>
  </ul>
</div>`;

const testQuestion: string = `id가 first인 요소를 선택해주세요.`

function Id() {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [solution, setSolution] = useState<string>('');

  const [code, setCode] = useState<string>('');
  const [viewCode, setViewCode] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorReg = /^[\#\.\.\[\]\s]+$|^$/;

    document.querySelector('#view')?.querySelectorAll('.wrong-answer').forEach(item => item.classList?.remove('wrong-answer'));
    document.querySelector('#view')?.querySelectorAll('.correct-answer').forEach(item => item.classList?.remove('correct-answer'));

    if (!errorReg.test(answer)) {

      if (answer === solution) {
        document.querySelector(`#view ${ answer }`)?.classList.add('correct-answer');
      } else {
        document.querySelector(`#view ${ answer }`)?.classList.add('wrong-answer');
      }
    }
  }

  useEffect(() => {
    setQuestion(testQuestion);
    setSolution(testSolution);
    setCode(testString);
    setViewCode(testString);
  }, []);

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
          <Typography variant="overline" >ANSWER</Typography>
          <Item id="answer" sx={{ flexDirection: 'column' }}>
            <Typography variant="body1" sx={{ height: '635px', p: 1 }} >{ question }</Typography>
            <Paper
              component="form"
              sx={{ p: 1, height: '45px', width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#F6F6F6' }}
              onSubmit={ onSubmit }
            >
              <InputBase placeholder="Enter CSS Selector" value={ answer } onChange={ (e: ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)} />
              <IconButton type="submit" >
                <FontAwesomeIcon icon={ faPaperPlane } size="xs" />
              </IconButton> 
            </Paper>
          </Item>
        </Grid>

      </Grid>
    </>
  );
}

export default Id;