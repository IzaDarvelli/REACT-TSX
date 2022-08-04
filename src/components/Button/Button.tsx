import React from "react";
import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined //props opicional
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}

export default Button;

//type children, esse REACT.COMPONENT já espera que tenha esse type children. No DOM parent e child. "permissão para conseguirmos utilizar alguma coisa dentro do componente, que é o que nós queremos. "