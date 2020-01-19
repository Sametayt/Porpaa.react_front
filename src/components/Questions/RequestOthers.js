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
import ReactTags from 'react-tag-autocomplete';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: 'auto'
  }
};

let suggestions = [];
// { id: '1', name: 'mango' },
// { id: '2', name: 'pineapple' },
// { id: '3', name: 'orange' },
// { id: '4', name: 'pear' }

const requestOthers = props => {
  props.suggestions.map(item => {
    suggestions.push({ name: `${item.firstName} ${item.lastName}`, id: item._id });
  });

  return (
    <Modal
      isOpen={props.show}
      //appElement='body'
      //onAfterOpen={this.afterOpenModal}
      //onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel='Add Question Modal'
    >
      <div className='u-display-flex'>
        <div className='o-row c-ask u-full-width'>
          <div className='o-col-12 u-justify-content-center'>
            <h2 className='u-medium-margin-bottom u-justify-content-center u-display-flex u-flex-row u-large-margin-vertical'>
              ارسال سوال به دیگران
            </h2>

            {console.log(props.friends)}
            <ReactTags
              className=' u-half-width u-flex-wrap'
              tags={props.tags}
              suggestions={suggestions}
              handleDelete={item => props.deleteTag(item)}
              placeholder='کاربران'
              allowNew={false}
              handleAddition={item => props.addTag(item)}
              handleInputChange={item => (item.length > 2 ? props.handleAddition(item) : null)}
            />

            <div className='c-ask__form c-form u-display-flex u-flex-row u-large-margin-vertical u-justify-content-center'>
              <Button
                onClick={e => props.submit(e)}
                className='c-btn c-btn--primary u-h3-font-size u-rounded u-medium-margin-left'
              >
                ارسال درخواست
              </Button>
              <Button onClick={props.toggleRequestModal} className='c-btn c-btn--outline u-h3-font-size u-rounded'>
                بستن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default requestOthers;
