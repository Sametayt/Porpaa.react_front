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

const PlayList = props => {
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
            {/* <h2 className='u-medium-margin-bottom u-justify-content-center u-display-flex u-flex-row u-large-margin-vertical'>
              ارسال سوال به دیگران
            </h2> */}

            <Form
              className='c-ask__form  c-form u-full-width u-medium-margin-vertical'
              // onSubmit={addQuestion}
              // validated={props.state.validated}
            >
              <Form.Control
                as='select'
                name='subject'
                className='u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width'
              >
                <option value=''>play list</option>
                {props.playLists.data && props.playLists.data.length > 0
                  ? props.playLists.data.map(item => {
                      return (
                        <option key={item._id} value={item._id}>
                          {item.title}
                        </option>
                      );
                    })
                  : null}
              </Form.Control>

              {/* <div className='u-display-flex u-flex-row u-justify-content-center'>
                <button className='c-btn c-btn--success u-medium-margin-left' >
                  add
                </button>
                <input type='text' placeholder='name' className='c-playList-search__input' />
              </div> */}

              <Form.Group className='u-display-flex u-flex-row u-justify-content-center' controlId='formBasicName'>
                <Button
                  variant='primary'
                  type='submit'
                  onClick={props.addingToPlaylist}
                  className='c-btn c-btn--small c-btn--success u-medium-margin-left'
                >
                  add
                </Button>
                <Form.Control
                  type='text'
                  autocomplete='off'
                  className='u-half-width c-playList-search__input u-medium-padding-horizontal'
                  placeholder='Enter name'
                />
              </Form.Group>

              <div className='c-ask__form c-form u-display-flex u-flex-row u-large-margin-vertical u-justify-content-center'>
                <Button
                  onClick={props.addingQuestionToPlaylist}
                  className='c-btn c-btn--primary u-h3-font-size u-rounded u-medium-margin-left'
                >
                  ثبت
                </Button>
                <Button onClick={props.togglePlayListModal} className='c-btn c-btn--outline u-h3-font-size u-rounded'>
                  بستن
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PlayList;
