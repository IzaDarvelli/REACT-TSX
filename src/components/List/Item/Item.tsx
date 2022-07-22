import { ITasks } from '../../../types/Task';
import style from '../List.module.scss';

export default function Item({task, time, select, filled, id}: ITasks) {
  console.log('item atual:', {task, time, select, filled, id});
    return(
        <li  className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
          </li>
    )
}

