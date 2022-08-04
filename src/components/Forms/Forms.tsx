import React, { useState } from "react";
import { ITasks } from "../../types/Task";
import Button from "../Button/Button";
import style from './Forms.module.scss';
import { v4 as uuidv4 } from 'uuid';


interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

function Forms({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(taskOld => [...taskOld, {
            task,
            time,
            select: false,
            filled: false,
            id: uuidv4()
        }]);

        setTask("");
        setTime("00:00");
    }
    return (
        <form className={style.newTask} onSubmit={addTask}>

            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new studies
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    placeholder="What do you want study?"
                    required />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    value={time} //sem value aleatório
                    onChange={event => setTime(event.target.value)} //assim que normalmente pegamos o value do input
                    id="time"
                    min="00:00:00"
                    max="01.30:00"
                    required />
            </div>
            <Button type="submit">
                Add
            </Button>
        </form>
    )
}

export default Forms;