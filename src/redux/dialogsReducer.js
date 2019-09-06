const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

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
        {id: 1, messageBody: "Hi"},
        {id: 2, messageBody: "How is yor it-kra?"},
        {id: 3, messageBody: "LA"},
        {id: 4, messageBody: "LA11"},
        {id: 5, messageBody: "LA23"},
        {id: 6, messageBody: "LA45"}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {...state, messages: [...state.messages, {id: 7, messageBody: action.newMessage}]};
        }
        default:
            return state;
    }
};



export const addNewMessage = (newMessage) => ({type: ADD_NEW_MESSAGE, newMessage});


export default dialogsReducer;
