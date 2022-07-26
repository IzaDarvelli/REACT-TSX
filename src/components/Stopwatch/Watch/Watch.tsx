import style from './Watch.module.scss';

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDezena, minuteUnid] = String(minutes).padStart(2, '0');
    const [secondsDezena, secondsUnid] = String(seconds).padStart(2, '0');


    return(
       <>
        <span className={style.watchNumber}>{minuteDezena}</span>
        <span className={style.watchNumber}>{minuteUnid}</span>
        <span className={style.watchDivision}>:</span>
        <span className={style.watchNumber}>{secondsDezena}</span>
        <span className={style.watchNumber}>{secondsUnid}</span>
       </>
    )
}