import React from 'react';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import timerFull from '../../assets/img/Question/Time1.svg';
import close from '../../assets/img/Question/close.png';
import timerMedium from '../../assets/img/Question/Time2.svg';
import renderHTML from 'react-render-html';
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
    height: 'auto'
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

const EditQuestion = props => {
  const { handleToggle, addQuestion, pristine, submitting, state, deleteTag, addTag, handleChange } = props;

  let newQuestion;

  // handleChange = value => {
  //   newQuestion = value;
  //   console.log(value);
  // };

  // let text = quill.getText(0, 10);
  // console.log(text);

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
            <div className="c-ask__form c-form u-full-width">
              <h4>{props.data.title}</h4>
              <div className="u-medium-padding-vertical">
              {renderHTML(props.data.description)}
              </div>
              <h2 className="o-col-lg-12 o-col-md-12 o-col-sm-12 u-large-margin-top u-display-flex u-justify-content-center u-flex-column-sm">
                <Button onClick={(e) => props.submit(e)} className="c-btn c-btn--primary u-h3-font-size u-rounded u-medium-margin-left">
                  ارسال درخواست
                </Button>
                <Button onClick={(e) => props.toggleEditModal()} className="c-btn c-btn--outline u-h3-font-size u-rounded">انصراف</Button>
              </h2>
            </div>
          </div>

          <div className="c-filter__quill o-col-lg-6 o-col-md-12 o-col-sm-12 u-order-sm-first u-order-lg-last">
            <div className="u-display-flex u-flex-row u-small-margin-top u-small-margin-bottom u-align-items-center u-justify-content-between">
              {/* <div className="u-display-flex u-flex-row u-align-items-center">
                <img height="45" src={timerMedium} className="u-medium-margin-left" />
                <Button className="c-btn--small c-btn--outline u-h3-font-size u-rounded u-medium-margin-left">
                  راهنما
                </Button>
              </div> */}
              {/* <div className="c-form__boxTimer">
                ۲۰:۱۷
                <Timer initialTime={55000} direction="backward">
                  {() => (
                    <React.Fragment>
                      <Timer.Minutes /> minutes
                      <Timer.Seconds /> seconds
                    </React.Fragment>
                  )}
                </Timer>
              </div> */}
              
              <a onClick={() => props.toggleEditModal()}>
                <img src={close} width="20px" />
              </a>
            </div>
            <ReactQuill
              value={props.current ? props.current : props.data.description}
              // value={this.state.text}
              onChange={handleChange}
              theme="snow"
              modules={quillModules}
              readOnly={false}
            />
            <div className="u-rounded c-form__backgray u-medium-margin-top">
              <div className="u-rounded c-form__backgray u-large-padding-vertical u-large-padding-horizontal">                
                {renderHTML(props.current ? props.current : props.data.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default(EditQuestion);
