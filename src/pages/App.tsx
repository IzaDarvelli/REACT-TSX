import React, { useState } from 'react';
import Forms from '../components/Forms/Forms';
import List from '../components/List/List';
import Stopwatch from '../components/Stopwatch/Stopwatch';
import { ITasks } from '../types/Task';
import style from './App.module.scss';

function App() {                        //is  ITasks or array vazio
    const [tasks, setTasks] = useState<ITasks[] | []>([]);
    const [selector, setSelect] = useState<ITasks>();

    function selectTask(taskSelect: ITasks){
      setSelect(taskSelect);
      setTasks(tasksOld => tasksOld.map(task => ({
        ...task,
        selector: task.id === taskSelect.id ? true : false //operador ternário;
      })));
    }

    function filledTask(){
      setSelect(undefined);
      if(selector){
        setTasks(tasksOld => tasksOld.map(task => {
          if(task.id === selector.id){
            return {
              ...task,
              selector: false,
              filled: true
            }
          }
          return task;
        }))
      }
    }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks} />
      <List tasks={tasks}  selectTask={selectTask}/>
      <Stopwatch 
      selector={selector} 
      filledTask={filledTask}/>
    </div>
  );
}


export default App;
