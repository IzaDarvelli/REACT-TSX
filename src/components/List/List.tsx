import { ITasks } from '../../types/Task';
import Item from './Item/Item';
import style from './List.module.scss';
//import { useState } from 'react'; // is a variable in that you add a value inside, but always that state change, the component that he has, also changes --> Hooks, useState is a state




function List ({tasks}: {tasks: ITasks[] }){
  return (
    <aside className={style.listTasks}>
      <h2> Studies of the day </h2>
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