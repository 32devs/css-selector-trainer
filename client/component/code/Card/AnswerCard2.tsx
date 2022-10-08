import { ChangeEvent, FormEventHandler } from 'react';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import Card2 from './Card2';

function AnswerCard2({ questionDesc, answer, setAnswer, onSubmit }: { questionDesc: string, answer: string, setAnswer: any, onSubmit: FormEventHandler<HTMLFormElement> }) {
  console.log(questionDesc)
  return (
    <Card2 id={ 'answer' }>
      <pre>{ questionDesc }</pre>
    </Card2>
  );
}

export default AnswerCard2;