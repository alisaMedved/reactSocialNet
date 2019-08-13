import React from 'react';
import s from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={s.item}>
            <img className={s.ava} src={props.avatarka}/>
            <p>{props.name}</p>
        </div>
    );
};

export default Friend;
