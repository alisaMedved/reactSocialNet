import React, {Component} from "react";
import {Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
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
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render= {() => <ProfileContainer/>}/>
                    <Route exact path="/music" render= {() => <Music/>}/>
                    <Route exact path="/news" render= {() => <News/>}/>
                    <Route exact path="/settings" render= {() => <Settings/>}/>
                    <Route exact path="/users" render = {() => <UsersContainer />} />
                    <Route exact path="/login" render= {() => <Login />}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {initialized: state.app.initialized};
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);




