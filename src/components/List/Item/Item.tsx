import { ITasks } from '../../../types/Task';
import style from './Item.module.scss';


interface Props extends ITasks {
  selectTask: (taskSelect: ITasks) => void
}


export default function Item({task, time, select, filled, id, selectTask}: Props) {

  return(
        <li  
        className={`${style.item} ${select ? style.
        itemSelecionado : ''} ${filled ? style.
        itemCompletado : ''}`} 
        onClick={() => !filled && selectTask(
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
            {filled && <span className={style.concluido}
            area-Label="task-filled"></span>} 
           
          </li>
    )
}


 // {filled && <span className={style.concluido} renderização condicional
