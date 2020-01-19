import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Questions from './containers/Questions/Questions';
import Answers from './containers/Questions/Answers';
import Auth from './containers/User/Auth';
import Login from './containers/User/Login';
import Register from './containers/User/Register';
import Search from './containers/Search/Search';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Profile from './containers/Profile/Profile';
import Moderator from './containers/Moderators/Moderators';
import RecoverPassword from './containers/User/PasswordRecovery';
import Setting from './containers/Setting/Setting';
import Notification from './containers/Notification/Notification';
import ModeratorNotification  from './containers/ModeratorNotification/ModeratorNotification';
const authView = props => {
  return (
    <div>
      <Auth route={props} />
    </div>
  );
};
const loginView = props => {
  return (
    <div>
      <Login route={props} />
    </div>
  );
};
const registerView = props => {
  return (
    <div>
      <Register route={props} />
    </div>
  );
};

const questionsView = props => {
  return (
    <div>
      <Header route={props} />
      <Questions route={props} />
      <Footer route={props} />
    </div>
  );
};

const searchView = props => {
  return (
    <div>
      <Header route={props} />
      <Search route={props} />
      <Footer route={props} />
    </div>
  );
};

const answerView = props => {
  return (
    <div>
      <Header route={props} />
      <Answers route={props} />
      <Footer route={props} />
    </div>
  );
};

const profileView = props => {
  return (
    <div>
      <Header route={props} />
      <Profile route={props} />
      <Footer route={props} />
    </div>
  );
};
const moderatorView = props => {
  return (
    <div>
      <Header route={props} />
      <Moderator route={props} />
      <Footer route={props} />
    </div>
  );
};
const settingView = props => {
  return (
    <div>
      <Header route={props} />      
      <Setting route={props} />
      <Footer route={props} />
    </div>
  );
};
const notificationView = props => {
  return (
    <div>
      <Notification route={props} />
      <Footer route={props} />
    </div>
  );
};
const questionNotificationView = props => {
  return (
    <div>
      <Header route={props} /> 
      <ModeratorNotification route={props} />
      <Footer route={props} />
    </div>
  );
};
const PassRecovery = props => {
  return (
    <div>
      <RecoverPassword route={props} />
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    // console.log('MAIN PROPS', props);
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <ToastContainer autoClose={5000} />
          <Switch location={this.props.location}>
            <Route path='/' exact children={props => authView(props)} />
            <Route path='/login' exact children={props => loginView(props)} />
            <Route path='/register' exact children={props => registerView(props)} />
            <Route path='/questions' exact children={props => questionsView(props)} />
            <Route path='/question/:id' exact children={props => answerView(props)} />
            <Route path='/search' exact children={props => searchView(props)} />
            <Route path='/profile' exact children={props => profileView(props)} />
            <Route path='/moderator' exact children={props => moderatorView(props)} />
            <Route path='/settings' exact children={props => settingView(props)} />
            <Route path='/notification' exact children={props => notificationView(props)} />
            <Route path='/moderatorNotification' exact children={props => questionNotificationView(props)} />
            <Route path='/recoverpassword' exact children={props => PassRecovery(props)} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
