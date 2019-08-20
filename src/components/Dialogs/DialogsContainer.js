import React from 'react';
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import storeContext from "./../../../src/storeContext";


const DialogsContainer = () => {
    return <storeContext.Consumer>
        {
        store => {
            const state = store.getState();

            const addNewMessage = () => {
                const action = addNewMessageActionCreator();
                store.dispatch(action);
            };

            const onMessageChange = (textMes) => {
                const action = onMessageChangeActionCreator(textMes);
                store.dispatch(action);
            };

            return (
                <Dialogs addMessage={addNewMessage} addMessageText={onMessageChange}
                         dialogs={state.dialogsPage.dialogs}
                         messages={state.dialogsPage.messages}
                         newMessageText={state.dialogsPage.newMessageText}/>
            );
        }
    }
    </storeContext.Consumer>
};

export default DialogsContainer;
