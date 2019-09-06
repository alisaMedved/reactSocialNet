import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


const Dialogs = (props) => {



    const dialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    const messagesElements = props.messages
        .map(m => <Message key={m.id} messageBody={m.messageBody}/>);



    const onSendMessage = (formData) =>  {
        props.addNewMessage(formData.newMessage);
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
            <AddMessageReduxForm onSubmit={onSendMessage}/>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
                <Field component={Textarea} name={"newMessage"} validate={[requiredField, maxLength50]}/>
            <button>send message</button>
        </form>
    );
};

const AddMessageReduxForm = reduxForm({form: "sendMessages"})(AddMessageForm);



export default Dialogs;
