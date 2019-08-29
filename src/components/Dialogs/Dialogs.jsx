import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {



    const dialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    const messagesElements = props.messages
        .map(m => <Message key={m.id} message={m.message}/>);




    const newMessageElement = React.createRef();

    const ClickAddMessage = () => {
      props.addNewMessage();
    };

    const ChangeTextMessage = () => {
        let textMes = newMessageElement.current.value;
     props.onMessageChange(textMes);
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
                <textarea ref={newMessageElement} onChange={ChangeTextMessage}
                          value={props.newMessageText}/>
                <button onClick={ClickAddMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
