import Button from "../Button/Button";
import Watch from "./Watch/Watch";
import style from './Stopwatch.module.scss';
import { timeToSeconds } from "../../common/utils/date";
import { ITasks } from "../../types/Task";
import { useEffect, useState } from "react";

interface Props{
    selector: ITasks | undefined
    filledTask: () => void
}

export default function Stopwatch({ selector, filledTask } : Props){
     //console.log('conversão:', timeToSeconds('01:01:01'))

    const[time, setTime] = useState<number>();
   
    useEffect(() => {
        if(selector?.time){
            setTime(timeToSeconds(selector.time))
        }
    }, [selector]); //array de dependencias como segundo parametro(todas as variáveis que queremos que o useEffect utilize como base para executar essa função.)

    function regressive(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTime(contador - 1);
                return regressive(contador - 1); //recursion
          }
           filledTask();
        }, 1000);
    }
    return(
         <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start  the timer</p>
            <div className={style.watchWrapper}>
                <Watch time={time}/>
            </div>
            <Button onClick={()=> regressive(time)} >
               Start
            </Button>
         </div>
    )
}

function filledTask(): void {
    throw new Error("Function not implemented.");
}
