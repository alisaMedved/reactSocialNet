const state = {
    profilePage: {
        posts: [
            {id: "1", message: "Hi, how are you?", likesCount: '11'},
            {id: "2", message: "It's my first post", likesCount: '15'},
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {id: "1", name: "Andrew", avatarkaSRC: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" },
            {id: "2", name: "Sasha", avatarkaSRC: "https://zabavnik.club/wp-content/uploads/foto_na_avu_1_19111518.jpg" },
            {id: "3", name: "Sveta", avatarkaSRC: "https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1" },
        ],
    }
};

export default state;
