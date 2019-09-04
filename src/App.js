import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route exact path="/music" render={() => <Music/>}/>
                <Route exact path="/news" render={() => <News/>}/>
                <Route exact path="/settings" render={() => <Settings/>}/>
                <Route exact path="/users" render = {() => <UsersContainer />} />
                <Route exact path="/login" render={() => <Login />}/>
            </div>
        </div>
    );
};

export default App;

