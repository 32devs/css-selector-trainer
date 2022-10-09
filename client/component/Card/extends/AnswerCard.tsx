import { IconButton, InputBase, Paper, styled, Typography } from '@mui/material';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Card from './Card';
import { ChangeEvent, FormEventHandler } from 'react';

function AnswerCard({ questionDesc, answer, setAnswer, onSubmit }: { questionDesc: string, answer: string, setAnswer: any, onSubmit: FormEventHandler<HTMLFormElement> }) {
  return (
    <Card id={ 'answer' } sx={{ flexDirection: 'column' }}>
      <Typography variant="body1" sx={{ height: '635px', p: 1 }}>
        { questionDesc}
      </Typography>
      <Paper
        component="form"
        sx={{ p: 1, height: '45px', width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#F6F6F6', border: '0.5px solid #90A4AE' }}
        onSubmit={ onSubmit }
        >
          <InputBase placeholder="Enter CSS Selector" value={ answer } onChange={ (e: ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)} />
          <IconButton type="submit" >
            <FontAwesomeIcon icon={ faPaperPlane } size="xs" />
          </IconButton> 
        </Paper>
    </Card>
  );
}

export default AnswerCard;