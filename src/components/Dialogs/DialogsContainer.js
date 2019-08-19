import React from 'react';
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
 const state = props.store.getState();

    const addNewMessage = () => {
        const action = addNewMessageActionCreator();
        props.store.dispatch(action);
    };

    const onMessageChange = (textMes) => {
        const action = onMessageChangeActionCreator(textMes);
        props.store.dispatch(action);
    };

    return (
   <Dialogs addMessage={addNewMessage} addMessageText={onMessageChange}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            newMessageText={state.dialogsPage.newMessageText}/>
    );
};

export default DialogsContainer;
