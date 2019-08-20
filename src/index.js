import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/reduxStore";
import App from "./App";
// import storeContext from "./../src/storeContext";
import {Provider} from  "./../src/storeContext";
import {BrowserRouter} from "react-router-dom";


const rendEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};


rendEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rendEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


