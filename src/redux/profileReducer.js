const ADD_POST = "ADD-POST";
const ADD_POST_TEXT = "ADD-POST-TEXT";

const initialState = {
    posts: [
    {id: "1", message: "Hi, how are you?", likesCount: '11'},
    {id: "2", message: "It's my first post", likesCount: '15'},
],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: "3",
                message: state.newPostText,
                likesCount: "0",
            };

            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case ADD_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
};

export const addNewPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) => ({type: ADD_POST_TEXT, text: text});

export default profileReducer;