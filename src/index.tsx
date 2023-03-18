import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './componets/Hello';
import Name from './componets/Name';
import Message from './componets/Message';
import Parent from './componets/ContainerSample';
import Page from './componets/ContextSample';
import Counter from './componets/Counter';
import Counter2 from './componets/Counter2';
import Counter3 from './componets/reducer';
import { Memo } from './componets/Memo';
import { Memo2 } from './componets/Memo2';
import { Parent3 } from './componets/useCallbackSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  {/* <React.StrictMode> */}
    <Hello />
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={1}/>
    <Counter2 />
    <Counter3 initialValue={0}/>
    {/* <Memo /> */}
    <Memo2 />
    <Parent3 />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
