import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
    {id: 1, message: "Hi, how are you?", likesCount: '11'},
    {id: 1, message: "It's my first post", likesCount: '15'},
];

const dialogs = [
    {name: "Dimych", id: '1'},
    {name: "Andrew", id: '2'},
    {name: "Sasha", id: '3'},
    {name: "Sveta", id: '4'},
    {name: "Valera", id: '5'},
    {name: "Viktor", id: '6'}
];

const messages = [
    {id: '1', message: "Hi"},
    {id: '2', message: "How is yor it-kra?"},
    {id: '3', message: "LA"},
    {id: '4', message: "LA11"},
    {id: '5', message: "LA23"},
    {id: '6', message: "LA45"}
];


ReactDOM.render(<App dataProfile = {posts} dataDialogs = {{dialogs, messages}}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
