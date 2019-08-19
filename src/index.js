import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addMessageText, addPost, addPostText, subscribe} from "./redux/state";
import App from "./App";


const rendEntireTree = (state) => {
    ReactDOM.render(<App state = {state} addPost={addPost} addPostText = {addPostText}
                         addMessage={addMessage} addMessageText={addMessageText}/>,
        document.getElementById('root'));
};


rendEntireTree(state);
subscribe(rendEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


