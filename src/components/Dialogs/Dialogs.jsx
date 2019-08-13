import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = ({dataDialogs}) => {
    const dialogsElements = dataDialogs.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    const messagesElements = dataDialogs.messages
        .map(m => <Message key={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h5>DIALOGS</h5>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;