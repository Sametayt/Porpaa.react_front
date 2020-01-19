import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import {
  fetchQuestions,
  fetchAnswers,
  searchUser,
  addFriend,
  fetchLevels,
  fetchMyChallenges,
  fetchActiveChallenges,
  fetchAPUsers,
  fetchMyPlayList,
  removePlayList,
  fetchBookmarks,
  deleteBookmark
} from '../../store/actions';
import TabContent from '../../components/Profiles/TabContent';
import { Steps, Hints } from 'intro.js-react';
import QuestionsProfile from '../../components/Profiles/QuestionsProfile';
import AnswerProfile from '../../components/Profiles/AnswerProfile';
import SignProfile from '../../components/Profiles/SignProfile';
import CardList from '../../components/Profiles/CardList';
import InformationProfile from '../../components/Profiles/InformationProfile';
import Challenge from '../../components/Profiles/Challenge';
import Playlist from '../../components/Profiles/PlayListProfile';
import SideBar from '../../components/Profiles/SideBar';
import Effects from '../../components/Profiles/Effects';
import logo from '../../assets/img/Profiles/baseline-favorite-24px.svg';
import Loader from '../../components/Common/Loader';
import stepContent from '../../components/Common/tutorialStepContent';
import { fetchTags_admin } from '../../store/adminActions';
import QuestionList from '../../components/Questions/QuestionList';

let name = 'mmd';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          img: logo,
          title: '1',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '2',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '3',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '4',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '5',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '6',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '7',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '8',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '9',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '10',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '11',
          name: 'ماهی'
          // onclick:''
        },
        {
          img: logo,
          title: '12',
          name: 'ماهی'
          // onclick:''
        }
      ],
      questions: [
        { title1: 'نوع مقطع', title2: 'موضع درسی', text: 'سوال مربوی به این بخش می باشد سوال می باشد' },
        { title1: 'نوع مقطع', title2: 'موضع درسی', text: 'سوال مربوی به این بخش می باشد سوال می باشد' },
        { title1: 'نوع مقطع', title2: 'موضع درسی', text: 'سوال مربوی به این بخش می باشد سوال می باشد' }
      ],
      subject: '',
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: '.e-step1',
          intro: stepContent(name)
        },
        {
          element: '.e-step2',
          intro: stepContent(name, 'bye')
        }
      ],
      hintsEnabled: true,
      hints: [
        {
          element: '.e-step1',
          hint: 'Hello hint',
          hintPosition: 'middle-right'
        }
      ]
    };
    this.options = {
      nextLabel: 'بعدی',
      prevLabel: 'قبلی',
      skipLabel: 'رد کردن',
      doneLabel: 'تمام'
    };
  }

  componentDidMount() {
    let obj = {};
    obj.user = JSON.parse(localStorage.getItem('user')).user_id;
    this.props.fetchQuestions(1, 10, obj);
    this.props.fetchAnswers(1, 10, obj);
    this.props.fetchLevels();
    this.props.fetchMyChallenges();
    this.props.fetchActiveChallenges();
    this.props.fetchAPUsers(1);
    this.props.fetchMyPlayList();
    this.props.fetchBookmarks();
  }

  getAPUsers = (e, dayCount) => {
    let list = document.querySelectorAll('.c-button__information');
    for (let item of list) {
      item.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
    dayCount ? this.props.fetchAPUsers(dayCount) : this.props.fetchAPUsers();
  };

  fetchUser = e => {
    let searchedUser = document.querySelector('.c-header-search__input_profile').value;

    this.props.searchUser(searchedUser);
    e.preventDefault();
    // console.log('searchedUser', searchedUser);
    // console.log(this.props.app.searchedUser);
  };

  addFriend = (e, userId) => {
    console.log(this.props.app);
    this.props.addFriend(userId);
  };

  // fetchAnswers =

  filterQuestions = (event, type) => {
    if (type == 'subject') {
      this.setState({
        subject: event
      });
    }
    //  else if (type == 'difficulty') {
    //   this.setState({
    //     subject: event
    //   });
    // } else if (type == 'time') {
    //   this.setState({
    //     time: val
    //   });
    // } else if (type == 'educationLevel') {
    //   this.setState({
    //     educationLevel: val
    //   });
    // }

    setTimeout(() => {
      let params = {};

      if (this.state.difficulty != '') {
        params.difficulty = this.state.difficulty;
      }
      if (this.state.subject != '') {
        params.subject = this.state.subject;
      }
      if (this.state.time != '') {
        params.time = this.state.time;
      }
      if (this.state.educationLevel != '') {
        params.educationLevel = this.state.educationLevel;
      }

      params.user = JSON.parse(localStorage.getItem('user')).user_id;

      return this.props.fetchQuestions(1, 10, params);
    }, 100);

    // let obj = {};
    // obj.user = JSON.parse(localStorage.getItem('user')).user_id;
    // this.props.fetchQuestions(1, 10, obj);
  };

  filterAnswers = (event, type) => {
    if (type == 'subject') {
      this.setState({
        subject: event
      });
    }
    //  else if (type == 'difficulty') {
    //   this.setState({
    //     subject: event
    //   });
    // } else if (type == 'time') {
    //   this.setState({
    //     time: val
    //   });
    // } else if (type == 'educationLevel') {
    //   this.setState({
    //     educationLevel: val
    //   });
    // }

    setTimeout(() => {
      let params = {};

      if (this.state.difficulty != '') {
        params.difficulty = this.state.difficulty;
      }
      if (this.state.subject != '') {
        params.subject = this.state.subject;
      }
      if (this.state.time != '') {
        params.time = this.state.time;
      }
      if (this.state.educationLevel != '') {
        params.educationLevel = this.state.educationLevel;
      }

      params.user = JSON.parse(localStorage.getItem('user')).user_id;

      return this.props.fetchAnswers(1, 10, params);
    }, 100);

    // let obj = {};
    // obj.user = JSON.parse(localStorage.getItem('user')).user_id;
    // this.props.fetchQuestions(1, 10, obj);
  };

  removeList = id => {
    this.props.removePlayList(id);
  };

  removeBookmark = id => {
    debugger;
    this.props.deleteBookmark(id);
  };

  render() {
    const { stepsEnabled, steps, initialStep, hintsEnabled, hints } = this.state;
    console.log('PROFILE REDUX STATE', this.props);
    if (!this.props.app.questions.isSuccessful || this.props.app.loader) {
      return <Loader />;
    }
    return (
      <div className='o-container  u-medium-padding-vertical u-clearfix'>
        {/* <Steps enabled={false} steps={steps} initialStep={initialStep} options={this.options} onExit={this.onExit} /> */}

        <div className='o-col-lg-9 u-pull-right'>
          <div>
            <Tabs className='c-profile__tabs  u-medium-margin-top' defaultActiveKey='1'>
              <Tab eventKey='1' title='نقشه پیشرفت' className='c-profile_tab-content o-row e-step1'>
                <TabContent data={this.state.cards} />
              </Tab>
              <Tab eventKey='2' title='نشان ها' className='c-profile_tab-content o-row '>
                <SignProfile />
              </Tab>
              <Tab eventKey='5' title='چالش ها' className='c-profile_tab-content o-row'>
                <Challenge data={this.props.app.myChallenges.data} activeChallenges={this.props.app.activeChallenges} />
              </Tab>
            </Tabs>

            <Tabs className='c-profile__tabs u-medium-margin-top  e-step2'>
              <Tab eventKey='1' title='سوال هام' className='c-profile_tab-content o-row'>
                <QuestionsProfile
                  filterQuestions={this.filterQuestions}
                  partials={this.props.app.partials}
                  data={this.props.app.questions.questions}
                />
              </Tab>
              <Tab eventKey='2' title='جواب هام' className='c-profile_tab-content o-row'>
                <AnswerProfile
                  filterAnswers={this.filterAnswers}
                  data={this.props.app.answers}
                  partials={this.props.app.partials}
                />
              </Tab>

              <Tab eventKey='3' title='پلی لیست' className='c-profile_tab-content'>
                <Playlist data={this.props.app.myPlayList.data} removeList={this.removeList} />
              </Tab>
              <Tab eventKey='4' title='تاثیرات' className='c-profile_tab-content'>
                <Effects
                  ap={this.props.app.partials.AP}
                  xp={this.props.app.partials.XP}
                  totalAp={this.props.app.partials.totalAP}
                  totalXp={this.props.app.partials.totalXP}
                />
              </Tab>
              <Tab eventKey='5' title='پرپایان' className='c-profile_tab-content'>
                {this.props.app.usersAP.isSuccessful ? (
                  <InformationProfile data={this.props.app.usersAP.data} getAPUsers={this.getAPUsers} />
                ) : null}
              </Tab>
              <Tab eventKey='6' title='بوکمارک ها' className='c-profile_tab-content'>
                <QuestionList
                  canDeleteBookmark={true}
                  data={this.props.app.questions.questions}
                  deleteBookmark={this.removeBookmark}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className='o-col-lg-3 u-pull-left  e-step2'>
          <SideBar
            missionCards={this.props.app.missionCards ? this.props.app.missionCards : []}
            searchedUser={this.props.app.searchedUser}
            fetchUser={this.fetchUser}
            data={this.props.app.partials}
            friends={this.props.app.partials.friends}
            addFriend={this.addFriend}
          />
        </div>
      </div>
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
    fetchQuestions: function(page, limit, filterParams) {
      dispatch(fetchQuestions(page, limit, filterParams));
    },
    deleteBookmark: function(questionId) {
      dispatch(deleteBookmark(questionId));
    },
    fetchAnswers: function(page, limit, filterParams) {
      dispatch(fetchAnswers(page, limit, filterParams));
    },
    searchUser: function(text) {
      dispatch(searchUser(text));
    },
    addFriend: function(userId) {
      dispatch(addFriend(userId));
    },
    fetchLevels: function() {
      dispatch(fetchLevels());
    },
    fetchMyChallenges: function() {
      dispatch(fetchMyChallenges());
    },
    fetchTags_admin: function() {
      dispatch(fetchTags_admin());
    },
    fetchActiveChallenges: function() {
      dispatch(fetchActiveChallenges());
    },
    fetchAPUsers: function(dayCount) {
      dispatch(fetchAPUsers(dayCount));
    },
    fetchMyPlayList: function(dayCount) {
      dispatch(fetchMyPlayList(dayCount));
    },
    removePlayList: function(id) {
      dispatch(removePlayList(id));
    },
    fetchBookmarks: function(id) {
      dispatch(fetchBookmarks(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
