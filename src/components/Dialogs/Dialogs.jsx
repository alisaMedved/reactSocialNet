import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const dialogs = [
    {name: "Dimych", id: '1'},
    {name: "Andrew", id: '2'},
    {name: "Sasha", id: '3'},
    {name: "Sveta", id: '4'},
    {name: "Valera", id: '5'},
    {name: "Viktor", id: '6'}
];

const messages = [
    {id: '1', message: "Hi"},
    {id: '2', message: "How is yor it-kra?"},
    {id: '3', message: "LA"},
    {id: '4', message: "LA11"},
    {id: '5', message: "LA23"},
    {id: '6', message: "LA45"}
];

const Dialogs = (props) => {

    const dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    const messagesElements = messages
        .map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
