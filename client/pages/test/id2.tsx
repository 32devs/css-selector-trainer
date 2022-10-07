import { useEffect, useState, FormEvent } from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import Card2 from '../../component/code/Card/Card2';
import CodeMirror from '../../component/code/CodeMirror';

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
    <Row style={{ width: '100%' }}>
        {/* VIEW */}
        <Col sm={ 12 } md={ 4 }>
          <p style={{ color: 'white' }}>VIEW</p>
          <Card2 id={ 'view' } viewCode={ code } />
        </Col>

        {/* CODE */}
        <Col sm={ 12 } md={ 4 }>
          <p style={{ color: 'white' }}>CODE</p>
          <CodeMirror value={ code } />
        </Col>

      <Col sm={ 12 } md={ 4 }>
        <p style={{ color: 'white' }}>ANSWER</p>
      </Col>
    </Row>
  )
}

export default Id2;