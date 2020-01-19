import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPartials, searchUser, addFriend, logOut, fetchMissionCards } from '../../store/actions';
///HEADER COMPONENTS
import Logo from '../../components/Header/Logo';
import LogoSm from '../../assets/img/Question/porpaa.svg';
import UserAbilityExperience from '../../components/Header/UserAbilityExperience';
import SearchBar from '../../components/Header/SearchBar';
import HeaderToolbar from '../../components/Header/HeaderToolbar';
import SideBar from '../../components/Header/SideBar';
import ToolbarSm from '../../components/Header/ToolbarSm';
import ability from '../../ability';
class Header extends Component {
  constructor(props) {
    super(props);

    let user = localStorage.getItem('user');
    if (user) {
      this.allow = true;
    } else {
      this.allow = false;
    }
  }

  componentDidMount = () => {
    this.props.getPartials();
    this.props.fetchMissionCards();
  };

  fetchUser = e => {
    let searchedUser = document.querySelector('.c-header-searchFriend__input').value;

    this.props.searchUser(searchedUser);
    e.preventDefault();
    // console.log('searchedUser', searchedUser);
    // console.log(this.props.app.searchedUser);
  };

  addFriend = (e, userId) => {
    console.log(this.props.app);
    this.props.addFriend(userId);
  };

  logOut = () => {
    this.props.logOut();
  };

  render() {
    console.log('HEWDER', this.props);
    return (
      <header id='header' className='clearfix c-header u-light-bkg'>
        <div className='c-header__none o-container-fluid u-small-padding-vertical u-display-flex u-flex-row u-justify-content-between'>
          <Logo
            Details={this.props.app.partials}
            // allow={this.allow}
            ap={this.props.app.partials.AP}
            xp={this.props.app.partials.XP}
            totalAp={this.props.app.partials.totalAP}
            totalXp={this.props.app.partials.totalXP}
          />
          <UserAbilityExperience ap={this.props.app.partials.AP} xp={this.props.app.partials.XP} />
          <SearchBar />
          <HeaderToolbar
            logOut={this.logOut}
            fetchUser={this.fetchUser}
            ap={this.props.app.partials.AP}
            xp={this.props.app.partials.XP}
            friends={this.props.app.searchedUser}
            data={this.props.app.partials}
            // allow={this.allow}
            notifications={this.props.app.notifications}
            addFriend={this.addFriend}
          />
        </div>
        <div className='c-header_sm u-display-lg-none u-full-width'>
          <div className='c-header_sm-logo u-pull-left'>
            <a href='#home' class='active'>
              <div className='u-display-flex u-flex-row u-small-margin-left'>
                <ToolbarSm
                  fetchUser={this.fetchUser}
                  ap={this.props.app.partials.AP}
                  xp={this.props.app.partials.XP}
                  friends={this.props.app.searchedUser}
                  data={this.props.app.partials}
                  notifications={this.props.app.notifications}
                  addFriend={this.addFriend}
                />
                <img height='30' src={LogoSm} />
              </div>
            </a>
          </div>
          <div className='c-header_sm-icon u-pull-right u-dir-ltr'>
            <SideBar />
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPartials: function() {
      dispatch(getPartials());
    },
    searchUser: function(text) {
      dispatch(searchUser(text));
    },
    addFriend: function(userId) {
      dispatch(addFriend(userId));
    },
    fetchMissionCards: function() {
      dispatch(fetchMissionCards());
    },
    logOut: function() {
      dispatch(logOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
