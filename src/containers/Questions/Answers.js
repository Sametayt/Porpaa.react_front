import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import renderHTML from 'react-render-html';
import {
  fetchQuestion,
  addAnswer,
  likeQuestion,
  addReport,
  addComment,
  likeAnswer,
  fetchBookmarks,
  addBookmark,
  answerStatus,
  challengeStart,
  searchUser,
  requestEdit,
  addQuestionToPlayList,
  addToPlayList,
  fetchMyPlayList,
  sendRequestOther
} from '../../store/actions';

///IMPORT QUESTIONS PAGE COMPONENTS
import Question from '../../components/Questions/Question';
import AnswerBox from '../../components/Common/AnswerBox';
import AnswerList from '../../components/Questions/AnswerList';
import AddAnswer from '../../components/Questions/AddAnswer';
import MissionsBox from '../../components/Questions/MissionsBox';
import ChallengesBox from '../../components/Questions/ChallengesBox';
import FriendsBox from '../../components/Questions/FriendsBox';
import SideBarQuestions from '../../components/Questions/sidebarQuestions';
import RequestOthers from '../../components/Questions/RequestOthers';
import Loader from '../../components/Common/Loader';
// import ReportModal from '../../components/Questions/AddReport';
import AddReport from '../../components/Questions/AddReport';
import EditQuestion from '../../components/Questions/EditQuestion';
import PlayList from '../../components/Questions/PlayList';
import Can from '../../Can';

let _this;
let user;

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen1: false,
      requestModalIsOpen: false,
      text: '',
      showReport: false,
      editModalisOpen: false,
      modalSuggestions: [],
      playListModalIsOpen: false,
      tags: []
    };
    this.handleAddition = this.handleAddition.bind(this);
    this.sendReport = this.sendReport.bind(this);
    _this = this;

    user = localStorage.getItem('user');
    if (user) {
      this.allow = true;
    } else {
      this.allow = false;
    }
  }
  componentDidMount() {
    ///Fetch Data for Questions

    const id = this.props.route.match.params.id;
    this.props.fetchQuestion(id);
    this.props.fetchMyPlayList();
  }

  addAnswer = () => {
    //this.setState({ modalIsOpen1: !this.state.modalIsOpen1 });
    let answer = this.state.text;
    let user = JSON.parse(localStorage.getItem('user')).user_id;
    let question = this.props.route.match.params.id;
    this.props.addAnswer(question, answer, user);
  };

  changeStatus = (event, id, status) => {
    this.props.answerStatus(id, status);
    event.preventDefault();
  };

  sendReport = (event, type, id = null) => {
    //this.setState({ modalIsOpen1: !this.state.modalIsOpen1 });

    let data = {};
    let reason = this.props.form.addReport.values.reportType;
    let reasonDetail = [];
    const arr = Object.keys(this.props.form.addReport.values);

    arr.map(function(item, index) {
      if (item.toLowerCase().startsWith(reason.toLowerCase())) {
        if (_this.props.form.addReport.values[item]) {
          reasonDetail.push(item);
        }
      }
    });

    data.reason = reason;
    data.reasonDetail = reasonDetail.join();

    if (this.state.type == 'question') {
      data.question = this.props.route.match.params.id;
    } else if (this.state.type == 'answer') {
      data.answer = this.state.answerId;
    } else if (this.state.type == 'answer_comment') {
      data.answer_comment = this.state.answerId;
    } else if (this.state.type == 'question_comment') {
      data.question_comment = this.state.answerId;
    }

    this.props.addReport(data, type);
  };

  challengeStart = (e, id) => {
    this.props.challengeStart(id);
  };

  handleChange = value => {
    this.setState({ text: value });
  };

  handleChangeEdit = value => {
    this.setState({ edit: value });
  };

  toggleReport = (e, id = null, type) => {
    const itemId = id;
    //alert(type);
    const newState = !this.state.showReport;
    this.setState({ showReport: newState, answerId: itemId, type: type });
    //e.preventDefault();
    // console.log(newState);
  };

  requestEdit = () => {
    this.props.requestEdit(this.props.route.match.params.id, this.state.edit);
  };

  addComment = (event, id, type) => {
    const form = event.currentTarget;

    let text = form.elements.comment.value;
    this.props.addComment(text, type, id, this.props.route.match.params.id);
    event.preventDefault();
    event.stopPropagation();
  };

  like = id => {
    this.props.likeQuestion(id);
  };

  likeAnswer = (e, id) => {
    this.props.likeAnswer(id, this.props.route.match.params.id);
    e.preventDefault();
  };

  handleEditModal = e => {
    const newState = !this.state.editModalisOpen;
    this.setState({ editModalisOpen: newState });
    // this.setState({
    //   editModalisOpen: true
    // });
  };

  toggleRequestModal = () => {
    this.setState({ requestModalIsOpen: !this.state.requestModalIsOpen });
  };

  togglePlayListModal = () => {
    this.setState({ playListModalIsOpen: !this.state.playListModalIsOpen });
  };

  handleAddition = item => {
    let suggestions;
    this.props
      .searchUser(item)
      .then(res => {
        if (res) {
          suggestions = res.data;
          this.setState({ modalSuggestions: suggestions });
        }
      })
      .catch(err => {
        alert('something wrong');
      });
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

  addBookmark = (e, id) => {
    this.props.addBookmark(id);
    console.log(localStorage.getItem('bookmarks'));
    e.preventDefault();
  };

  submitRequestOther = e => {
    let question = this.props.route.match.params.id;
    let users = this.state.tags.map(item => item.id);
    this.props.sendRequestOther(users, question);
    this.setState({ requestModalIsOpen: false, tags: [] });
  };

  AddToPlaylist = e => {
    let title = document.querySelector('.c-playList-search__input').value;
    title ? this.props.addToPlayList(title) : alert('empty input');
    this.props.fetchMyPlayList();
  };

  AddQuestionToPlaylist = e => {
    let question = this.props.route.match.params.id;
    let id = this.props.app.partials.currentUser._id;
    this.props.addQuestionToPlayList(question, id);
  };

  render() {
    console.log('SINGLE QUESTION', this.props);
    if (this.props.app.loader || !this.props.app.question.isSuccessful) {
      return <Loader />;
    }
    let owner = false;
    if (JSON.parse(user).user_id == this.props.app.question.data.user._id) {
      owner = true;
    }
    return (
      <div className='o-container u-large-padding-vertical'>
        <section className='o-row'>
          <div className='o-col-lg-9 o-col-md-6 o-col-sm-12 c-questions__main'>
            <Question
              like={this.like}
              toggleRequestModal={this.toggleRequestModal}
              togglePlayListModal={this.togglePlayListModal}
              handleOpen={this.handleOpen}
              data={this.props.app.question.data}
              toggleReport={this.toggleReport}
              handleEditModal={this.handleEditModal}
              // permission={this.allow}
              bookmark={this.addBookmark}
              currentUser={this.props.app.partials.currentUser ? this.props.app.partials.currentUser : []}
            />
            <AnswerBox
              data={this.props.app.question.data}
              click={this.addAnswer}
              // permission={this.allow}
              handleChange={this.handleChange}
              toggleReport={this.toggleReport}
              currentUser={this.props.app.partials.currentUser ? this.props.app.partials.currentUser : []}
            />
            <AnswerList
              data={this.props.app.question.data}
              answer={this.props.data}
              validated={false}
              // permission={this.allow}
              // owner={owner}
              addComment={this.addComment}
              likeAnswer={this.likeAnswer}
              changeStatus={this.changeStatus}
              toggleReport={this.toggleReport}
              currentUser={this.props.app.partials.currentUser ? this.props.app.partials.currentUser : []}
            />
          </div>

          {/* {this.allow ? ( */}
          <Can I='View' a='SideBar'>
            <div className='o-col-lg-3 o-col-md-6 o-col-sm-12 c-questions__sidebar'>
              <MissionsBox
                missionCards={this.props.app.missionCards}
                currentUser={this.props.app.partials.currentUser ? this.props.app.partials.currentUser : []}
              />
              <ChallengesBox
                data={this.props.app.partials.challenge ? this.props.app.partials.challenge : []}
                start={this.challengeStart}
              />
              <FriendsBox data={this.props.app.partials.friends ? this.props.app.partials.friends : []} />
              <SideBarQuestions
                filter={this.filter}
                subjects={
                  this.props.app.partials && this.props.app.partials.subjects ? this.props.app.partials.subjects : []
                }
                state={this.state}
              />
            </div>
          </Can>
          {/* ) : null} */}
        </section>
        <AddAnswer
          toggleModalAnswer={this.toggleModalAnswer}
          handleChange={this.handleChange}
          data={this.props.app.partials && this.props.app.partials.subjects ? this.props.app.partials.subjects : []}
          addQuestion={this.addQuestion}
          state={this.state}
          deleteTag={this.deleteTag}
          addTag={this.addTag}
          show={this.state.modalIsOpen1}
        />
        <EditQuestion
          show={this.state.editModalisOpen}
          toggleEditModal={this.handleEditModal}
          data={this.props.app.question.data}
          current={this.state.edit ? this.state.edit : this.props.app.question.data.description}
          handleChange={this.handleChangeEdit}
          submit={this.requestEdit}
          // data={this.props.app.partials && this.props.app.partials.subjects ? this.props.app.partials.subjects : []}
          // addQuestion={this.addQuestion}
          // state={this.state}
          // deleteTag={this.deleteTag}
          // addTag={this.addTag}
          // show={this.state.modalIsOpen1}
        />
        <RequestOthers
          suggestions={this.state.modalSuggestions}
          handleAddition={this.handleAddition}
          tags={this.state.tags}
          deleteTag={this.deleteTag}
          addTag={this.addTag}
          submit={this.submitRequestOther}
          toggleRequestModal={this.toggleRequestModal}
          show={this.state.requestModalIsOpen}
        />

        <PlayList
          show={this.state.playListModalIsOpen}
          togglePlayListModal={this.togglePlayListModal}
          addingToPlaylist={this.AddToPlaylist}
          addingQuestionToPlaylist={this.AddQuestionToPlaylist}
          playLists={this.props.app.myPlayList}
        />

        <AddReport
          toggleReport={this.toggleReport}
          show={this.state.showReport}
          sendReport={this.sendReport}
          formType='question'
          type={this.props.form.addReport ? this.props.form.addReport.values : null}
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

const mapDispatchToProps = {
  searchUser: searchUser,
  fetchQuestion: fetchQuestion,
  addAnswer: addAnswer,
  likeQuestion: likeQuestion,
  likeAnswer: likeAnswer,
  addReport: addReport,
  addComment: addComment,
  fetchBookmarks: fetchBookmarks,
  searchUser: searchUser,
  addBookmark: addBookmark,
  answerStatus: answerStatus,
  challengeStart: challengeStart,
  requestEdit: requestEdit,
  sendRequestOther: sendRequestOther,
  addQuestionToPlayList: addQuestionToPlayList,
  fetchMyPlayList: fetchMyPlayList,
  addToPlayList: addToPlayList
};

export default compose(
  reduxForm({
    form: 'report', // a unique identifier for this form
    destroyOnUnmount: false
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Answers);
// export default Home;

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchQuestion: function(id) {
//       dispatch(fetchQuestion(id));
//     },

//     addAnswer: function(question, description, user) {
//       dispatch(addAnswer(question, description, user));
//     },

//     likeQuestion: function(id) {
//       dispatch(likeQuestion(id));
//     },

//     likeAnswer: function(id, qId) {
//       dispatch(likeAnswer(id, qId));
//     },

//     addReport: function(data, type) {
//       dispatch(addReport(data, type));
//     },

//     addComment: function(text, type, id, qId) {
//       dispatch(addComment(text, type, id, qId));
//     },

//     fetchBookmarks: function() {
//       dispatch(fetchBookmarks());
//     },

//     searchUser: function(text) {
//       dispatch(searchUser(text));
//     },

//     addBookmark: function(id) {
//       dispatch(addBookmark(id));
//     },
//     answerStatus: function(id, status) {
//       dispatch(answerStatus(id, status));
//     },
//     challengeStart: function(id) {
//       dispatch(challengeStart(id));
//     },
//     requestEdit: function(id, text) {
//       dispatch(requestEdit(id, text));
//     }
//   };
// };
