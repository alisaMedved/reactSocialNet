 // store
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


const store = {
    _state: {
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
        },
        usersPage: {
            users: [
    {name: "Dmitry K.", status: "I am looking for a Job right now...", place: {country: "Belarus", city: "Minsk"}},
    {name: "Svetlana D.", status: "I am so pretty", place: {country: "Belarus", city: "Minsk"}},
    {name: "Sergei S.", status: "I like football!!!", place: {country: "Ukrane", city: "Kiev"}},
    {name: "Andrew T.", status: "I am free to help you  to create good Video Production", place: {country: "United States", city: "Philadelphia"}}
            ]
        }
    },
    _callSubscriber() {                       // вызвать подписчика - уведомить подписчика
        console.log('state was changed');
    },

    subscribe(observer) {                       // функция подписки наблюдателя (подписчика) на изменения store
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },


    dispatch(action) {
this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;


