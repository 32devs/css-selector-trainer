import { useEffect, useState, FormEvent } from 'react';

import { Row, Col } from 'react-bootstrap';

const testSolution: string = '#first';
const testString: string = `<div>
  <ul>
    <li id="first">1</li>
    <li id="twice">2</li>
  </ul>
</div>`;

const testQuestion: string = `id가 first인 요소를 선택해주세요.`;

function Id2() {
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
    <Row>
        {/* VIEW */}
        <Col sm={ 12 } md={ 4 }>
          VIEW
        </Col>

        {/* CODE */}
        <Col sm={ 12 } md={ 4 }>
          CODE
        </Col>

      <Col sm={ 12 } md={ 4 }>
        ANSWER
      </Col>
    </Row>
  )
}

export default Id2;