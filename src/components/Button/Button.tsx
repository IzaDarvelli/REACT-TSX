import React from "react";
import style from './Button.module.scss';

class Button extends React.Component<{ 
    type?: "button" | "submit" | "reset" | undefined //props opicional
    onClick?: () => void
    children: string}> {
    render() {
         const {type = "button", onClick} = this.props;
        return (
            <button onClick={onClick} type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;



//type children, esse REACT.COMPONENT já espera que tenha esse type children. No DOM parent e child. "permissão para conseguirmos utilizar alguma coisa dentro do componente, que é o que nós queremos. "