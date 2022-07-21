import React from "react";
import Button from "../Button/Button";
import style from './Forms.module.scss';

class Forms extends React.Component {
    
    render() {
        return (
            <form className={style.newTask}>

                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new studies
                    </label>
                    <input 
                      type="text" 
                      name="task" 
                      id="task" 
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
                       id="time" 
                       min="00:00:00" 
                       max="01.30:00" 
                       required />
                </div>
                <Button>
                    Add
                </Button>
            </form>
        )
    }
}

export default Forms;