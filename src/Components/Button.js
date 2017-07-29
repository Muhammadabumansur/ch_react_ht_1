import React from 'react';

const Button = function(props){
    return (
        <button onClick={props.handleClick} >
            { props.isOpened ? "Скрыть" : "Показать" }
        </button>
    )
}

export default Button;