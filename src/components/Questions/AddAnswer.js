import React from 'react';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
// import {Timer} from "react-compound-timer";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '100%'
  }
};

const quillModules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'code', 'strike', 'size', 'direction'],
    ['script'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['image'],
    ['formula']
  ]
};

const AddAnswer = props => {
  const { handleToggle, addQuestion, pristine, submitting, state, deleteTag, addTag, handleChange } = props;

  return (
    <Modal
      isOpen={props.show}
      //appElement='body'
      //onAfterOpen={this.afterOpenModal}
      //onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Add Question Modal"
    >
      <div className="u-display-flex">
        <div className="o-row c-ask u-full-width">
          <div className="o-col-lg-6 o-col-md-12 o-col-sm-12">
            <h2 className="u-medium-margin-bottom u-display-none-sm">سوال</h2>
            <Form className="c-ask__form c-form u-full-width" onSubmit={addQuestion} validated={props.state.validated}>
              <p>متن سوال در این قسمت نوشته شده است</p>
              <p>فرمول ریاضی من درسته ؟</p>
              <p>لطفا راهنمایی کنید ، ممنون</p>
              <h2 className="o-col-lg-12 o-col-md-12 o-col-sm-12 u-large-margin-top u-display-flex u-justify-content-center u-flex-column-sm">
                <Button type="submit" className="c-btn c-btn--primary u-h3-font-size u-rounded u-medium-margin-left">
                  انتشار پاسخ
                </Button>
                <Button
                  onClick={() => props.toggleModalAnswer()}
                  className="c-btn c-btn--outline u-h3-font-size u-rounded"
                >
                  پیش نویس پاسخ
                </Button>
              </h2>
            </Form>
          </div>

          <div className="c-filter__quill o-col-lg-6 o-col-md-12 o-col-sm-12 u-order-sm-first u-order-lg-last">
            <div className="u-display-flex u-flex-row u-small-margin-top u-small-margin-bottom u-align-items-center u-justify-content-between">
              <div className="u-display-flex u-flex-row u-align-items-center">
                <img height="45" src={timerMedium} className="u-medium-margin-left" />
                <Button className="c-btn--small c-btn--outline u-h3-font-size u-rounded u-medium-margin-left">
                  راهنما
                </Button>
              </div>
              <div className="c-form__boxTimer">
                ۲۰:۱۷
                {/* <Timer initialTime={55000} direction="backward">
                  {() => (
                    <React.Fragment>
                      <Timer.Minutes /> minutes
                      <Timer.Seconds /> seconds
                    </React.Fragment>
                  )}
                </Timer> */}
              </div>
            </div>
            <ReactQuill onChange={handleChange} theme="snow" modules={quillModules} />
            <div className="u-rounded c-form__backgray u-medium-margin-top">
              <p className="u-rounded c-form__backgray u-large-padding-vertical u-large-padding-horizontal">
                متن پیش نویس شما
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default reduxForm({
  form: 'addAnswer', // <------ same form name
  destroyOnUnmount: false // <------ preserve form data
})(AddAnswer);
