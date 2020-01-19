import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import { addReport, getPartials } from '../../store/actions';
import { fetchEditRequest_admin, fetchReports_admin } from '../../store/adminActions';
import QuestionModerators from '../../components/Moderators/QuestionModerators';
import ReportModerators from '../../components/Moderators/ReportModerator';
import SideBarModerator from '../../components/Moderators/SideBarModerator';
import ability from '../../ability';
import { Redirect } from 'react-router-dom';

class ReportModerator extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      modalIsOpen1: false,
      text: '',
      showReport: false,
      editModalisOpen: false,
      showEdit: false,
      showTags: false,
      showText: false,
      tags: [],
      suggestions: [],
      initialFormValue: null,
      currentStep:{},
    };
  }

  componentDidMount = () => {
    // let myId = this.props.app.partials.currentUser._id;
    // let status = 'accepted';
    this.props.fetchReports_admin();
  };

 
  modalHandler = e => {
    let show = this.state.showEdit;
    if (show == true) {
      this.setState({
        showEdit: false
      });
    } else {
      this.setState({
        showEdit: true
      });
    }
  };

  modalTags = e => {
    let show = this.state.showTags;
    if (show == true) {
      this.setState({
        showTags: false
      });
    } else {
      this.setState({
        showTags: true
      });
    }
  };

  modalText = e => {
    let show = this.state.showText;
    if (show == true) {
      this.setState({
        showText: false
      });
    } else {
      this.setState({
        showText: true
      });
    }
  };

  deleteTag = i => {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  };

  toggleReport = (e, id = null, type) => {
    const itemId = id;
    //alert(type);

    const newState = !this.state.showReport;
    this.setState({ showReport: newState, answerId: itemId, type: type });
    e.preventDefault();
    // console.log(newState);
  };

  sendReport = (event, type, id = null) => {
    //this.setState({ modalIsOpen1: !this.state.modalIsOpen1 });

    let data = {};
    let reason = this.props.form.addReport.values.reportType;
    let reasonDetail = [];
    const arr = Object.keys(this.props.form.addReport.values);

    arr.map(function(item, index) {
      if (item.toLowerCase().startsWith(reason.toLowerCase())) {
        if (this.props.form.addReport.values[item]) {
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

  formHandle = item => {
    debugger;
    this.setState({ showReport: !this.state.showReport, initialFormValue: item.reason });
    this.props.initialize({
      reportType: item.reason
    });
    console.log(this.state.initialFormValue);
  };

  render() {
    if (this.props.app.partials.role && !ability.can('View', 'Admin-Panel')) {
      return <Redirect to='/questions' />;
    } else {
      return (
        <div className='o-container u-large-margin-top'>
          <div className='u-display-flex u-flex-row u-flex-column-sm u-flex-column-md'>
            <div className='o-col-lg-9 o-col-md-12 o-col-sm-12 o-col-xs-12'>
              {this.props.admin.adminReports.data && this.props.admin.adminReports.data.length > 0
                ? this.props.admin.adminReports.data.map(item => {
                    return <p onClick={() => this.formHandle(item)}>{item.question}</p>;
                  })
                : null}
              <QuestionModerators />
            </div>
            <div className='o-col-lg-3 o-col-md-12 o-col-sm-12 o-col-xs-12'>
              <SideBarModerator />
            </div>
          </div>

          <ReportModerators
            toggleReport={this.toggleReport}
            show={this.state.showReport}
            showEdit={this.state.showEdit}
            showTags={this.state.showTags}
            showText={this.state.showText}
            sendReport={this.sendReport}
            modalHandler={this.modalHandler}
            modalTags={this.modalTags}
            modalText={this.modalText}
            initialFormValue={this.state.initialFormValue}
            deleteTag={this.deleteTag}
            tags={this.props.app.partials && this.props.app.partials.tags ? this.props.app.partials.tags : []}
            formType='question'
            type={this.props.form.reportModerator ? this.props.form.reportModerator.values : null}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReport: function(data, type) {
      dispatch(addReport(data, type));
    },
    fetchEditRequest_admin: function(status, user) {
      dispatch(fetchEditRequest_admin(status, user));
    },
    fetchReports_admin: function() {
      dispatch(fetchReports_admin());
    },
    getPartials: function() {
      dispatch(getPartials());
    }
  };
};

export default compose(
  reduxForm({
    form: 'reportModerator', // a unique identifier for this form
    destroyOnUnmount: false
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ReportModerator);
// export default Moderators ;
