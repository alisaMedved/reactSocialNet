import React from 'react';
import {addNewMessageActionCreator, onMessageChangeActionCreator} from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
        addMessageText: (textMes) => {
            dispatch(onMessageChangeActionCreator(textMes));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
