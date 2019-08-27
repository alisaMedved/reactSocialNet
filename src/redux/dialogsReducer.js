const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_MESSAGE_TEXT = "ADD-MESSAGE-TEXT";

const initialState = {
    dialogs: [
        {name: "Dimych", id: 1},
        {name: "Andrew", id: 2},
        {name: "Sasha", id: 3},
        {name: "Sveta", id: 4},
        {name: "Valera", id: 5},
        {name: "Viktor", id: 6}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is yor it-kra?"},
        {id: 3, message: "LA"},
        {id: 4, message: "LA11"},
        {id: 5, message: "LA23"},
        {id: 6, message: "LA45"}
    ],
    newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 7,
                message: state.newMessageText
            };
            return {...state, messages: [...state.messages, newMessage], newMessageText: ""};
        }
        case ADD_MESSAGE_TEXT: {
            return {...state, newMessageText: action.textMes};
        }
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE});

export const onMessageChangeActionCreator = (textMes) => ({type: ADD_MESSAGE_TEXT, textMes: textMes});

export default dialogsReducer;
