
let rendEntireTree = () => {
    console.log('state was changed');
};

const state = {
    profilePage: {
        posts: [
            {id: "1", message: "Hi, how are you?", likesCount: '11'},
            {id: "2", message: "It's my first post", likesCount: '15'},
        ],
        newPostText: "",
    },
    dialogsPage: {
        dialogs: [
            {name: "Dimych", id: '1'},
            {name: "Andrew", id: '2'},
            {name: "Sasha", id: '3'},
            {name: "Sveta", id: '4'},
            {name: "Valera", id: '5'},
            {name: "Viktor", id: '6'}
        ],
        messages: [
            {id: '1', message: "Hi"},
            {id: '2', message: "How is yor it-kra?"},
            {id: '3', message: "LA"},
            {id: '4', message: "LA11"},
            {id: '5', message: "LA23"},
            {id: '6', message: "LA45"}
        ],
        newMessageText: "",
    },
    sidebar: {
        friends: [
            {id: "1", name: "Andrew", avatarkaSRC: "https://st2.depositphotos.com/4323461/7314/v/950/depositphotos_73146465-stock-illustration-anxious-emotional-face-men-fear.jpg" },
            {id: "2", name: "Sasha", avatarkaSRC: "https://zabavnik.club/wp-content/uploads/foto_na_avu_1_19111518.jpg" },
            {id: "3", name: "Sveta", avatarkaSRC: "https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1" },
        ],
    }
};

window.state = state;

export const addPost = () => {
    const newPost = {
        id: "3",
        message: state.profilePage.newPostText,
        likesCount: "0",
    };

    state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = "";
    rendEntireTree(state);
};

export const addPostText = (text) => {
    state.profilePage.newPostText = text;
    rendEntireTree(state);
};

export const addMessage = () => {
    const newMessage = {
        id: "7",
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = "";
    rendEntireTree(state);
};

export const addMessageText = (textMes) => {
state.dialogsPage.newMessageText = textMes;
    rendEntireTree(state);

};

export const subscribe =(observer) => {
    rendEntireTree = observer;
};

export default state;
