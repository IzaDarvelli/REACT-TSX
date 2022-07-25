import { ITasks } from '../../../types/Task';
import style from './Item.module.scss';


interface Props extends ITasks {
  selectTask: (taskSelect: ITasks) => void
}


export default function Item({task, time, select, filled, id, selectTask}: Props) {

  return(
        <li  
        className={`${style.item} ${select ? style.
        itemSelecionado : ''}`} 
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

