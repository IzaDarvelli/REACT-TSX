import Item from './Item/Item';
import style from './List.module.scss';
import { useState } from 'react'; // is a variable in that you add a value inside, but always that state change, the component that he has, also changes --> Hooks, useState is a state

function List() {
  const [tasks, setTasks] = useState([{
    task: 'PROA',
    time: '04:00:00'
  }, {
    task: 'ROCKETSEAT',
    time: '00:45:00'
  }, {
    task: "ALURA",
    time: "00:30:00"
  }, {
    task: 'MORE1CODE',
    time: '00:30:00'
  }]);


  return (
    <aside className={style.listTasks}>
      <h2 onClick={() => {
        setTasks([...tasks, { task: "Study state", time: "03:00:00"}]);
      }}> Studies of the day </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            // task={item.task}
            // time={item.time}
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;