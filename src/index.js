import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import App from "./App";


const rendEntireTree = () => {
    ReactDOM.render(<App state = {store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
};



rendEntireTree(store.getState());
store.subscribe(rendEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


