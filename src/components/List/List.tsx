import { ITasks } from '../../types/Task';
import Item from './Item/Item';
import style from './List.module.scss';
//import { useState } from 'react'; // is a variable in that you add a value inside, but always that state change, the component that he has, also changes --> Hooks, useState is a state

interface Props{
  tasks: ITasks[],
  selectTask: (taskSelect: ITasks) => void
}


function List ({tasks, selectTask}: Props){ 
  return (
    <aside className={style.listTasks}>
      <h2> Studies of the day </h2>
      <ul>
        {tasks.map(item => (
          <Item
          selectTask={selectTask}
            // task={item.task}
            // time={item.time}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}
 


export default List;