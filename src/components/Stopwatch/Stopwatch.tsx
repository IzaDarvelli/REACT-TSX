import Button from "../Button/Button";
import Watch from "./Watch/Watch";
import style from './Stopwatch.module.scss';
import { timeToSeconds } from "../../common/utils/date";
import { ITasks } from "../../types/Task";
import { useEffect, useState } from "react";

interface Props{
    selector: ITasks | undefined
}

export default function Stopwatch({ selector } : Props){
     //console.log('conversão:', timeToSeconds('01:01:01'))

    const[time, setTime] = useState<number>();
   
    useEffect(() => {
        if(selector?.time){
            setTime(timeToSeconds(selector.time))
        }
    }, [selector]); //array de dependencias como segundo parametro(todas as variáveis que queremos que o useEffect utilize como base para executar essa função.)

    return(
         <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start  the timer</p>
            Time: {time}
            <div className={style.watchWrapper}>
                <Watch/>
            </div>
            <Button>
               Start
            </Button>
         </div>
    )
}