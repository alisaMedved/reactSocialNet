
const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_MESSAGE_TEXT = "ADD-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: "7",
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case ADD_MESSAGE_TEXT:
           state.newMessageText = action.textMes;
            return state;
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE});

export const onMessageChangeActionCreator = (textMes) => ({type: ADD_MESSAGE_TEXT, textMes: textMes});

export default dialogsReducer;
