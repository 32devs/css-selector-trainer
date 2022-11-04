import { GetServerSideProps } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import AnswerCard from '../component/Card/extends/AnswerCard';
import BasicCard from '../component/Card/BasicCard';
import DescCard from '../component/Card/extends/DescCard';
import CodeCard from '../component/Card/extends/CodeCard';

// --------------------------------------------------------------------

const data = [
  {
    s: 'id',
    solution: '#first',
    testString: `<div>
  <ul>
    <li id="first">1</li>
    <li id="second">2</li>
    <li id="third">3</li>
  </ul>
</div>`,
    desc: 'CSS Selector에서 id는 <code-gray>#</code-gray>으로 표현됩니다.',
    question: '<strong>id</strong>가 <strong>first</strong>인 요소를 선택해주세요.'
  }
];

// --------------------------------------------------------------------

function Test() {
  const router: NextRouter = useRouter();
  const { s } = router.query;

  // --------------------------------------------------------------------

  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [solution, setSolution] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const [code, setCode] = useState<string>('');
  const [viewCode, setViewCode] = useState<string>('');

  // --------------------------------------------------------------------
  
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

  // --------------------------------------------------------------------

  useEffect(() => {

    if (!router.isReady) return;
    const testData = data.find(e => e.s == s);

    setQuestion(testData?.question || '');
    setSolution(testData?.solution || '');
    setDesc(testData?.desc || '');

    setCode(testData?.testString || '');
    setViewCode(testData?.testString || '');

    
  }, [ router ]);

  // --------------------------------------------------------------------

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
  );
}

// --------------------------------------------------------------------

export default Test;