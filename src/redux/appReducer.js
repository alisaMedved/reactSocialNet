import {getMyAuthorization} from "./authReducer";

const INITIALIZED_SUCSESS = "INITIALIZED-SUCSESS";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCSESS: {
            return {...state, initialized: true}
        }
        default: {
            return state;
        }
    }
};

export const initializedSucsess = () => ({type: INITIALIZED_SUCSESS});

export const initializeApp = () => (dispatch) => {
     dispatch(getMyAuthorization())
        .then(() => {
        dispatch(initializedSucsess());
    });
};

export default appReducer;
