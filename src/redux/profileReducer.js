import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const ADD_POST_TEXT = "ADD-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
    userProfile: null,
    posts: [
    {id: 1, message: "Hi, how are you?", likesCount: '11'},
    {id: 2, message: "It's my first post", likesCount: '15'},
],
    newPostText: "",
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: "0",
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
        }
        case ADD_POST_TEXT: {
            return {...state, newPostText: action.text};
            }
        case SET_USER_PROFILE: {
            return {...state, userProfile: {...action.userProfile,
                    contacts: {...action.userProfile.contacts}, photos: {...action.userProfile.photos}}};
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
};

export const addNewPost = () => ({type: ADD_POST});

export const onPostChange = (text) => ({type: ADD_POST_TEXT, text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
};
export const updateStatus = (status) => {
    return (dispatch) => {
       profileAPI.putUserStatus(status)
           .then(data => {
               if (data.resultCode === 0) {
                   dispatch(setStatus(status));
               }
           })
    }
};





export default profileReducer;
