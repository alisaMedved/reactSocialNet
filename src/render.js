import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from "./../src/redux/state";
import * as serviceWorker from './serviceWorker';

export const rendEntireTree = (state) => {
    ReactDOM.render(<App state = {state} addPost={addPost}/>,
        document.getElementById('root'));
};




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


