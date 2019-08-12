import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from "./components/Settings/Settings";


const App = ({state}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar dataNavbar = {state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route exact path = "/dialogs" render={() =>
                        <Dialogs dataDialogs = {state.dialogsPage}/>}/>
                    <Route path="/profile" render={() => <Profile dataProfile = {state.profilePage}/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>);
};

export default App;
