import { ChangeEvent, FormEventHandler } from 'react';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import BasicCard from '../BasicCard';

function AnswerCard2({ questionDesc, answer, setAnswer, onSubmit }: { questionDesc: string, answer: string, setAnswer: any, onSubmit: FormEventHandler<HTMLFormElement> }) {
  return (
    <BasicCard id={ 'answer' } half={ true }>
      <pre>{ questionDesc }</pre>
    </BasicCard>
  );
}

export default AnswerCard2;