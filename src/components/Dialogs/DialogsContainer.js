import React from 'react';
import {addNewMessage, onMessageChange} from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const DialogsContainer = connect(mapStateToProps, {
    addNewMessage,
    onMessageChange
})(Dialogs);

export default DialogsContainer;
