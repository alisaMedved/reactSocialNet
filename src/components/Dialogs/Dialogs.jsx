import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    const dialogsElements = props.dataDialogs.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    const messagesElements = props.dataDialogs.messages
        .map(m => <Message key={m.id} message={m.message}/>);

    const newMessageElement = React.createRef();

    const addNewMessage = () => {
        props.addMessage();
    };

    const onMessageChange = () => {
        let textMes = newMessageElement.current.value;
        props.addMessageText(textMes);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h5>DIALOGS</h5>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dataDialogs.newMessageText} />
                <button onClick={addNewMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
