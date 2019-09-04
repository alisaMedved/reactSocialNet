import {authAPI} from "../api/api";

const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: true,
    authProfile: null
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
            })
    }
};


export const toggleIsFetching = (isFetchingData) => ({type: TOGGLE_IS_FETCHING, isFetchingData});
export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}});
export default authReducer;
