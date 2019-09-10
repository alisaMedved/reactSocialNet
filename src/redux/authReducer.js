import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";


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
            return {...state, ...action.data}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetchingData}
        }
        default:
            return state;
    }
};

export const getMyAuthorization = () => (dispatch) => {
        // dispatch(toggleIsFetching(true));
        return authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                   // dispatch(toggleIsFetching(false));
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    };

export const postMyLogin = (email, password, rememberMe) => (dispatch) => {
        authAPI.postAuthLogin(email, password, rememberMe)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getMyAuthorization());
                } else {
                    dispatch(stopSubmit("login", {_error: data.messages[0]}));

                }
            });
};

export const outMyLogin = () => (dispatch) => {
        authAPI.postAuthLogout()
            .then(data => {
                debugger;
                if (data.resultCode === 0) {
                 dispatch(setAuthUserData(null, null, null, false));
                } else {
                    console.log(data);
                }
            });
};


export const toggleIsFetching = (isFetchingData) => ({type: TOGGLE_IS_FETCHING, isFetchingData});
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}});
export default authReducer;
