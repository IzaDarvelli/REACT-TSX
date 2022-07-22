import { ITasks } from '../../../types/Task';
import style from '../List.module.scss';


interface Props extends ITasks {
  selectTask: (taskSelect: ITasks) => void
}


export default function Item({task, time, select, filled, id, selectTask}: Props) {

  //console.log('item atual:', {task, time, select, filled, id});

    return(
        <li  
        className={style.item} 
        onClick={() => selectTask(
        {
          task,
          time,
          select,
          filled,
          id
        }
        )}>
            <h3>{task}</h3>
            <span>{time}</span>
          </li>
    )
}

