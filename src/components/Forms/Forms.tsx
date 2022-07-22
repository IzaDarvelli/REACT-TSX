import React from "react";
import { ITasks } from "../../types/Task";
import Button from "../Button/Button";
import style from './Forms.module.scss';
import {v4 as uuidv4} from 'uuid';



class Forms extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}> {
    //he always is a object:
    state = {
        task: "",
        time: "00:00:00"

    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(taskOld => [...taskOld, { ...this.state, select: false, filled: false, id: uuidv4()}]);
        //resetar o forms:
        this.setState({
            task: "",
            time: "00:00:00"
        })
        //console.log('state', this.state)
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>

                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new studies
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={this.state.task}
                        onChange={event => this.setState({ ...this.state, task: event.target.value })}
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
                        value={this.state.time} //sem value aleatório
                        onChange={event => this.setState({ ...this.state, time: event.target.value })} //assim que normalmente pegamos o value do input
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
}

export default Forms;