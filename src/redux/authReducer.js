import {authAPI} from "../api/api";

const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const DELETE_AUTH_USER_DATA = "DELETE-AUTH-USER-DATA";


const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    authProfile: null,
    password: null
};

const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA: {
            return {...state, ...action.data,
                isAuth: true}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetchingData}
        }
        case DELETE_AUTH_USER_DATA: {
            return {...state, id: null, email: null, login: null, isAuth: false}
        }
        default:
            return state;
    }
};

export const getMyAuthorization = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                   dispatch(toggleIsFetching(false));
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export const postMyLogin = (formData) => {
    return (dispatch) => {
        authAPI.postAuthLogin(formData.email, formData.password, formData.rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data.userId, formData.email, formData.login));
                }
            });
    }
};

export const outMyLogin = () => {
    return (dispatch) => {
        authAPI.posstAuthLogout()
            .then(data => {
                if (data.resultCode === 0) {
                 dispatch(deleteAuthUserData());
                }
                console.log(data.resultCode);
            });
    }
};


export const toggleIsFetching = (isFetchingData) => ({type: TOGGLE_IS_FETCHING, isFetchingData});
export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}});
export const deleteAuthUserData = () => ({type: DELETE_AUTH_USER_DATA});
export default authReducer;
