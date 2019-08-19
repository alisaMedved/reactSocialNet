import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "./../../redux/dialogsReducer";


const Dialogs = (props) => {
    const dialogsElements = props.dataDialogs.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    const messagesElements = props.dataDialogs.messages
        .map(m => <Message key={m.id} message={m.message}/>);

    const newMessageElement = React.createRef();

    const addNewMessage = () => {
        const action = addNewMessageActionCreator();
        props.dispatch(action);
    };

    const onMessageChange = () => {
        let textMes = newMessageElement.current.value;
        const action = onMessageChangeActionCreator(textMes);
        props.dispatch(action);
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
                <textarea ref={newMessageElement} onChange={onMessageChange}
                          value={props.dataDialogs.newMessageText} />
                <button onClick={addNewMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
