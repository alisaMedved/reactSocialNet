const ADD_POST = "ADD-POST";
const ADD_POST_TEXT = "ADD-POST-TEXT";

const profileReducer = (state, action) => {
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
