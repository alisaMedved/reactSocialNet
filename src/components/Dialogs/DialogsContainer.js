import React from 'react';
import {addNewMessage} from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

const DialogsContainer = compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
