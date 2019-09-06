import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={`${s.message} + ${s.__other}`}>
                <img className={s.ava}
                     src="https://st2.depositphotos.com/4323461/7314/v/950/depositphotos_73146465-stock-illustration-anxious-emotional-face-men-fear.jpg"/>
                <div className={s.letter}>{props.messageBody}</div>
            </div>
            <div className={s.message}>
                <img className={s.ava}
                     src="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"/>
                <div className={s.letter}>{props.messageBody}</div>
            </div>
        </div>
    );
};

export default Message;



