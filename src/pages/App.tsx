import React from 'react';
import Forms from '../components/Forms/Forms';
import List from '../components/List/List';
import Stopwatch from '../components/Stopwatch/Stopwatch';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
      <Stopwatch/>
    </div>
  );
}

export default App;
