import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import { Grid, Paper, Typography, styled, InputBase, IconButton } from '@mui/material';

import Card from '../../component/code/Card/Card';

import CodeMirror from '../../component/code/CodeMirror';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AnswerCard from '../../component/code/Card/AnswerCard';

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
            <Typography variant="overline" sx={{ color: 'white' }}>VIEW</Typography>
            <Card id={ 'view' } viewCode={ code } />
          </Grid>
          <Grid item sx={{ p: 2 }} sm={ 12 } md={ 6 }>
            <Typography variant="overline" sx={{ color: 'white' }}>CODE</Typography>
            <CodeMirror value={ code } />
          </Grid>
        </Grid>

        <Grid item sx={{ p: 2 }} sm={ 12 } md={ 3 }>
          <Typography variant="overline" sx={{ color: 'white' }}>ANSWER</Typography>
          <AnswerCard
            questionDesc={ question }
            answer={ answer }
            setAnswer={ setAnswer }
            onSubmit={ onSubmit }
          />
        </Grid>

      </Grid>
    </>
  );
}

export default Id;