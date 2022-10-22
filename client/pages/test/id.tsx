import { useEffect, useState, FormEvent } from 'react';

import { Row, Col } from 'react-bootstrap';
import AnswerCard from '../../component/Card/extends/AnswerCard';
import BasicCard from '../../component/Card/BasicCard';
import DescCard from '../../component/Card/extends/DescCard';
import CodeCard from '../../component/Card/extends/CodeCard';

const testSolution: string = '#first';
const testString: string = `<div>
  <ul>
    <li id="first">1</li>
    <li id="second">2</li>
    <li id="third">3</li>
  </ul>
</div>`;

const desc: string = `CSS Selector에서 id는 <code-gray>#</code-gray>으로 표현됩니다.`;
const testQuestion: string = `<strong>id</strong>가 <strong>first</strong>인 요소를 선택해주세요.`;

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
      <Col sm={ 12 } xl={ 4 } className={ 'p10' }>
        <p className="color-white ml5" >VIEW</p>
        <BasicCard id={ 'view' } viewCode={ code } />
      </Col>

      {/* CODE */}
      <Col sm={ 12 } xl={ 4 } className={ 'p10' }>
        <p className="color-white ml5" >CODE</p>
        <CodeCard value={ code } />
      </Col>

      <Col sm={ 12 } xl={ 4 } className={ 'p10' }>
        <p className="color-white ml5" >ANSWER</p>
        <AnswerCard
          questionDesc={ question }
          answer={ answer }
          setAnswer={ setAnswer }
          onSubmit={ onSubmit } />
        <DescCard desc={ desc } />
      </Col>
    </Row>
  )
}

export default Id2;