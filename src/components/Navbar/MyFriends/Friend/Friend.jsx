import React from 'react';
import s from "./Friend.module.css";

const Friend = (props) => {
    console.log(props.avatarkaSRC);
    return (
        <div className={s.item}>
            {/*<img src={props.avatarkaSRC}/>*/}
            <img className={s.ava} src={props.avatarka}/>
            <p>{props.name}</p>
        </div>
    );
};

export default Friend;
