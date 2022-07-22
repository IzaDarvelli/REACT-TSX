import React, { useState } from 'react';
import Forms from '../components/Forms/Forms';
import List from '../components/List/List';
import Stopwatch from '../components/Stopwatch/Stopwatch';
import { ITasks } from '../types/Task';
import style from './App.module.scss';

function App() {                        //is  ITasks or array vazio
    const [tasks, setTasks] = useState<ITasks[] | []>([]);
    const [select, setSelect] = useState<ITasks>();

    function selectTask(taskSelect: ITasks){
          selectTask(taskSelect);
    }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks} />
      <List tasks={tasks}  selectTask={selectTask}/>
      <Stopwatch/>
    </div>
  );
}


export default App;
