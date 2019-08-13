import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.message}>
                <img className={s.ava}
                     src="https://st2.depositphotos.com/4323461/7314/v/950/depositphotos_73146465-stock-illustration-anxious-emotional-face-men-fear.jpg"/>
                <div className={s.letter}>{props.message}</div>
            </div>
            <div className={`${s.message} + ${s.__other}`}>
                <img className={s.ava}
                     src="https://st2.depositphotos.com/4323461/7314/v/950/depositphotos_73146465-stock-illustration-anxious-emotional-face-men-fear.jpg"/>
                <div className={s.letter}>{props.message}</div>
            </div>
        </div>
    );
};

export default Message;



