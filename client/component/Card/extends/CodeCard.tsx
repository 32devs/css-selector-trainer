import { MutableRefObject, useEffect, useRef } from 'react';
// codemirror
import { EditorState } from '@codemirror/state';
import { basicSetup, EditorView } from 'codemirror';
import { html } from '@codemirror/lang-html';

import { Card } from 'react-bootstrap';

import styles from '../Card.module.css';

function CodeCard({ value }: { value: string}) {

  const editor: MutableRefObject<HTMLDivElement> = useRef() as MutableRefObject<HTMLDivElement>;

  const initialState: EditorState = EditorState.create({
    doc: value,
    extensions: [
      basicSetup,
      EditorView.editable.of(false),
      html(),
      EditorView.theme({
        '&.cm-editor': {
          width: '100%',
          height: '100%'
        }
      })
    ]
  });

  useEffect(() => {
    const view: EditorView = new EditorView({
      state: initialState,
      parent: editor.current
    });
    return () => view?.destroy();
  }, [value]);
  
  return <Card className={ styles['card'] } ref={ editor } />;
}

export default CodeCard;