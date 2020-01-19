import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {fetchQuestionsContent}  from '../../store/actions';

import {
  addQuestions,
  fetchQuestions,
  fetchTags,
  fetchChallenge,
  fetchNotifications,
  challengeStart
} from '../../store/actions';
import ReactPaginate from 'react-paginate';
///IMPORT QUESTIONS PAGE COMPONENTS
import AddQuestion from '../../components/Questions/AddQuestion';
import Question from '../../components/Questions/Question';
// import AddAnswer from '../../components/Questions/AddAnswer';
// import AddReport from '../../components/Questions/AddReport';
import SideNav from '../../components/Questions/SideNav';
import BigBanner from '../../components/Questions/BigBanner';
import Filters from '../../components/Questions/Filters';
import QuestionList from '../../components/Questions/QuestionList';
import MissionsBox from '../../components/Questions/MissionsBox';
import ChallengesBox from '../../components/Questions/ChallengesBox';
import FriendsBox from '../../components/Questions/FriendsBox';
import Loader from '../../components/Common/Loader';
import Can from '../../Can';

let role;
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalIsOpenAnswer: false,
      modalIsOpenReport: false,
      text: '',
      title: '',
      difficulty: '',
      subject: '',
      time: '',
      educationLevel: '',
      tags: [],
      suggestions: [],
      data: [],
      offset: 0,
      limit: 10,
      diff: null
    };

    let user = localStorage.getItem('user');
    if (user) {
      this.allow = true;
    } else {
      this.allow = false;
    }

    this.addQuestion = this.addQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuestions(1, 10);
    //this.props.fetchTags();
    //this.props.fetchChallenge();
    this.props.fetchNotifications();
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  toggleModalAnswer = () => {
    this.setState({ modalIsOpenAnswer: !this.state.modalIsOpenAnswer });
  };

  toggleModalReport = () => {
    this.setState({ modalIsOpenReport: !this.state.modalIsOpenReport });
  };

  deleteTag = i => {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  };

  addTag = tag => {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  };

  handleChange = value => {
    this.setState({ text: value });
  };
  addQuestion = event => {
    event.preventDefault();
    const { addQuestions } = this.props;
    const form = event.currentTarget;
    ///CHeck form validation

    if (form.checkValidity() === false) {
      this.setState({ validated: true });
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      ///get form data
      this.setState({ validated: false });
      const data = {};
      data.title = form.elements.title.value;
      data.subject = form.elements.subject.value;
      data.difficulty = form.elements.difficulty.value;
      data.user = user['user_id'];
      data.description = this.state.text;

      let tags = [];
      this.state.tags.map(function(item) {
        tags.push(item._id);
      });

      data.tags = tags;

      // "title":"String",
      // "description":"String",
      // "subject":"String id",
      // "user":"String id",
      // "difficalty":"{type:String,enum:['easy','medium','hard']}",
      // "tags":["String id"]

      addQuestions(data);
    }
    this.setState({ setValidated: true });
    event.preventDefault();
    event.stopPropagation();
  };

  handlePageClick = data => {
    let selected = data.selected + 1;
    let offset = Math.ceil(selected * this.props.perPage);
    let params = {};
    if (this.state.difficulty != '') {
      params.difficulty = this.state.difficulty;
    } else if (this.state.subject != '') {
      params.subject = this.state.subject;
    } else if (this.state.time != '') {
      params.time = this.state.time;
    } else if (this.state.educationLevel != '') {
      params.educationLevel = this.state.educationLevel;
    }

    this.props.fetchQuestions(selected, 10, params);
    window.scrollTo(0, 0);
  };

  challengeStart = (e, id) => {
    this.props.challengeStart(id);
  };

  filter = (event, type) => {
    let val = null;

    if (event.currentTarget) {
      val = event.currentTarget.getAttribute('itemvalue');
    }

    if (type == 'difficulty') {
      this.setState({
        difficulty: val
      });
    } else if (type == 'subject') {
      this.setState({
        subject: event
      });
    } else if (type == 'time') {
      this.setState({
        time: val
      });
    } else if (type == 'educationLevel') {
      this.setState({
        educationLevel: val
      });
    }

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

      window.scrollTo(0, 0);
      return this.props.fetchQuestions(1, 10, params);
    }, 100);
  };

  sendReport = event => {
    let f = event.currentTarget.elements;
    console.log(f);
    event.preventDefault();
  };

  render() {
    console.log('QUERSTIONS', this.props);
    if (!this.props.app.questions.isSuccessful || this.props.app.loader) {
      return <Loader />;
    }

    return (
      <div className='o-container u-large-padding-vertical'>
        <section className='o-row'>
          <div className='o-col-lg-2 o-col-md-12 o-col-sm-12 c-questions__nav'>
            <SideNav
              filter={this.filter}
              state={this.state.subject}
              click={this.toggleModalAnswer}
              clickReport={this.toggleModalReport}
              data={this.props.app.partials && this.props.app.partials.subjects ? this.props.app.partials.subjects : []}
            />
          </div>
          <div className='o-col-lg-7 o-col-md-12 o-col-sm-12 c-questions__main'>
            <BigBanner click={this.toggleModal} />
            <Filters
              filter={this.filter}
              subjects={
                this.props.app.partials && this.props.app.partials.subjects ? this.props.app.partials.subjects : []
              }
              state={this.state}
            />
            <QuestionList data={this.props.app.questions.questions} />
            <div className='c-pagination u-medium-margin-vertical u-display-flex u-flex-row u-align-items-center u-justify-content-center'>
              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.props.app.questions ? Math.ceil(this.props.app.questions.count / this.state.limit) : 0}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </div>
          </div>
          <Can I='View' a='SideBar'>
            <div className='o-col-lg-3 o-col-md-12 o-col-sm-12 c-questions__sidebar'>
              <MissionsBox
                missionCards={this.props.app.missionCards}
                currentUser={this.props.app.partials.currentUser ? this.props.app.partials.currentUser : []}
              />
              <ChallengesBox
                data={this.props.app.partials.challenge ? this.props.app.partials.challenge : []}
                start={this.challengeStart}
              />
              <FriendsBox data={this.props.app.partials.friends ? this.props.app.partials.friends : []} />
            </div>
          </Can>
        </section>
        <AddQuestion
          toggleModal={this.toggleModal}
          handleChange={this.handleChange}
          data={this.props.app.partials && this.props.app.partials.subjects ? this.props.app.partials.subjects : []}
          addQuestion={this.addQuestion}
          state={this.state}
          deleteTag={this.deleteTag}
          addTag={this.addTag}
          tags={this.props.app.partials && this.props.app.partials.tags ? this.props.app.partials.tags : []}
          show={this.state.modalIsOpen}
        />
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
    fetchQuestions: function(page, limit, params) {
      dispatch(fetchQuestions(page, limit, params));
    },

    addQuestions: function(data) {
      dispatch(addQuestions(data));
    },

    fetchTags: function() {
      dispatch(fetchTags());
    },

    fetchChallenge: function() {
      dispatch(fetchChallenge());
    },

    fetchNotifications: function(type, seen) {
      dispatch(fetchNotifications(type, seen));
    },

    challengeStart: function(id) {
      dispatch(challengeStart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
// export default Home;
