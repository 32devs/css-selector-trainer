import { ChangeEvent, FormEventHandler } from 'react';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { Button, Form, InputGroup } from 'react-bootstrap';

import BasicCard from '../BasicCard';

function AnswerCard2({ questionDesc, answer, setAnswer, onSubmit }: { questionDesc: string, answer: string, setAnswer: any, onSubmit: FormEventHandler<HTMLFormElement> }) {
  return (
    <BasicCard id={ 'answer' } half={ true }>
      <pre>{ questionDesc }</pre>

      <Form onSubmit={ onSubmit }>
        <InputGroup style={{ bottom: '0' }}>
          <Form.Control
            placeholder="Enter CSS Selector"
            value={ answer }
            onChange={ (e: ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value) }
          />
          <Button type="submit" variant="outline-secondary">
            <FontAwesomeIcon icon={ faPaperPlane } size="xs" />
          </Button>
        </InputGroup>
      </Form>
    </BasicCard>
  );
}

export default AnswerCard2;