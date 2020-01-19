import React from 'react';
import Modal from 'react-modal';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
import close from '../../assets/img/Question/close.png';
import baseline from '../../assets/img/Question/baseline-outlined_flag-24px.svg';
import symb from '../../assets/img/2.png';
import pen from '../../assets/img/Moderator/pen.png.png';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalModaretor from '../Moderators/ModalModaretor';
import TagsModaretor from './TagsModaretor';
import ModeratorTextModal from './ModeratorTextModal';
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
    display: 'block'
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

let initialValues;

const ReportModerator = props => {
  const { formType } = props;

  return (
    <Modal
      isOpen={props.show}
      //appElement='body'
      //onAfterOpen={this.afterOpenModal}
      //onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel='Add Question Modal'
    >
      <div className=' c-scroll-modal o-container u-display-flex u-flex-column'>
        <div className='o-col-lg-12 o-col-md-12 o-col-sm-12'>
          <div className='u-display-flex u-flex-row u-medium-margin-bottom u-justify-content-between'>
            <a onClick={e => props.toggleReport(e)}>
              <img src={close} width='20px' className='c-modal__close-modaretors' />
            </a>
          </div>
          <div className='u-display-flex u-flex-row u-align-items-center u-justify-content-center o-row u-flex-column-sm'>
            <img className='c-modal__symbol o-col-sm-2 u-order-md-last' src={symb} />
            <h4 className='c-modal__title u-horizontal-center o-col-md-4 o-col-sm-12'>چه خوب شد برگشتی</h4>
          </div>
          <form type={props.type} className='o-row' initialValues={{ reportType: 'A' }}>
            <div className=' o-col-lg-8 o-col-sm-12 c-modal_moderator-content o-row u-medium-margin-top u-smallx-margin-bottom u-medium-padding-vertical u-smallx-padding-horizontal'>
              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center u-small-margin-bottom'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`A`}
                    name='reportType'
                    value='A'
                  />
                  <label className='u-no-margin u-small-margin-horizontal'>نوشته توهین آمیز</label>
                </div>
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`B`}
                    name='reportType'
                    value='B'
                  />
                  <label className='u-no-margin u-small-margin-horizontal'>تبلیغاتی</label>
                </div>
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center u-small-margin-bottom'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`C`}
                    name='reportType'
                    value='C'
                  />
                  <label className='c-modal_moderator-link u-no-margin u-small-margin-horizontal'>دارای لینک</label>
                </div>
                {props.type && props.type.reportType == 'C' ? (
                  <div className='c-modal__moderator-radio u-display-flex u-flex-column  u-justify-content-start u-flex-wrap'>
                    <div className='u-display-flex u-flex-row u-align-items-center'>
                      <Field component='input' type='checkbox' name='C-1' value='C-1' />
                      <label className='c-modal_moderator-link u-no-margin u-small-margin-horizontal'>
                        حاوی لینک خارج از پرپا
                      </label>
                    </div>
                    {/* <!--ITEM--> */}

                    <div className='u-display-flex u-flex-row u-align-items-center u-small-margin-top'>
                      <Field component='input' type='checkbox' name='C-2' value='C-2' />
                      <label className='u-no-margin u-small-margin-horizontal'>
                        در خواست برای گرفتن لینک خارج از پرپا
                      </label>
                    </div>
                    {/* <!--ITEM--> */}
                  </div>
                ) : null}
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`D`}
                    name='reportType'
                    value='D'
                  />
                  <label className='u-no-margin u-small-margin-horizontal'>دارای اطلاعات شخصی</label>
                </div>
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`F`}
                    name='reportType'
                    value='F'
                  />
                  <label className='u-no-margin u-small-margin-horizontal'>سوال نظرخواهی</label>
                </div>
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`F`}
                    name='reportType'
                    value='F'
                  />
                  <label className='u-no-margin u-small-margin-horizontal'>سوال قابلیت جواب ندارد</label>
                </div>
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center u-small-margin-bottom'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`G`}
                    name='reportType'
                    value='G'
                  />
                  <label className='u-no-margin u-small-margin-horizontal u-display-flex u-flex-row u-align-content-center'>
                    سوال اشتباه است
                    <img width='22' height='22' src={pen} className='u-small-margin-right' />
                  </label>
                </div>
                {props.type && props.type.reportType == 'G' ? (
                  <div controlId='G' className='u-display-flex u-flex-column  u-justify-content-start'>
                    <div className='c-modal__moderator-radio2 u-display-flex u-flex-column'>
                      <div className=' u-display-flex u-flex-row u-small-padding-top u-small-padding-horizontal'>
                        <Field className=' o-col-1' component='input' type='checkbox' name='G-1' value='G-1' />
                        <label className='c-modal_moderator-link u-no-margin u-no-padding o-col-7'>
                          ناقص یا کم محتواست
                        </label>
                        <a
                          onClick={e => props.modalText(e)}
                          className='c-btn c-btn--smallx c-btn--primary u-light-text-color u-horizontal-center o-col-4'
                        >
                          ویرایش میکنم
                        </a>
                      </div>
                      <div className=' u-display-flex u-flex-row u-small-padding-top u-small-padding-horizontal'>
                        <Field className='o-col-1' component='input' type='checkbox' name='G-2' value='G-2' />
                        <label className='c-modal_moderator-link u-no-margin u-no-padding o-col-7'>
                          مقطع سوال اشتباه است{' '}
                        </label>
                        <a
                          onClick={e => props.modalHandler(e)}
                          className='c-btn c-btn--smallx c-btn--primary u-light-text-color u-horizontal-center o-col-4'
                        >
                          ویرایش میکنم
                        </a>
                      </div>
                      <div className=' u-display-flex u-flex-row u-small-padding-top u-small-padding-horizontal'>
                        <Field className='o-col-1' component='input' type='checkbox' name='G-3' value='G-3' />
                        <label className='c-modal_moderator-link u-no-margin u-no-padding o-col-7'>
                          موضوع سوال اشتباه است{' '}
                        </label>
                        <a className='c-btn c-btn--smallx c-btn--primary u-light-text-color u-horizontal-center o-col-4'>
                          ویرایش میکنم
                        </a>
                      </div>
                      <div className=' u-display-flex u-flex-row u-small-padding-top u-small-padding-horizontal'>
                        <Field className='o-col-1' component='input' type='checkbox' name='G-4' value='G-4' />
                        <label className='c-modal_moderator-link-2 u-no-padding o-col-7'>برچسب سوال اشتباه است </label>
                        <a
                          className='c-btn c-btn--smallx c-btn--smallx c-btn--primary u-light-text-color u-horizontal-center o-col-4'
                          onClick={e => props.modalTags(e)}
                        >
                          ویرایش میکنم
                        </a>
                      </div>
                    </div>

                    {/* <!--ITEM--> */}
                  </div>
                ) : null}
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center u-small-margin-bottom'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`H`}
                    name='reportType'
                    value='H'
                  />
                  <label className='u-no-margin u-small-margin-horizontal u-display-flex u-flex-row u-align-content-center'>
                    سوال دارای ضعف نوشتاری است
                    <img width='22' height='22' src={pen} className='u-small-margin-right' />
                  </label>
                </div>
                {props.type && props.type.reportType == 'H' ? (
                  <div
                    controlId='H'
                    className='c-modal__moderator-radio-parent u-display-flex u-flex-column  u-justify-content-start'
                  >
                    <div className='c-modal__moderator-radio2 u-display-flex u-flex-row u-align-items-center'>
                      <Field component='input' type='checkbox' name='H-1' value='H-1' />
                      <label className='c-modal_moderator-link u-no-margin u-no-padding o-col-7'>
                        ناقص یا کم محتواست
                      </label>
                      <a
                        onClick={e => props.modalText(e)}
                        className='c-btn c-btn--smallx c-btn--primary u-light-text-color u-horizontal-center o-col-4'
                      >
                        ویرایش میکنم
                      </a>
                    </div>
                    {/* <!--ITEM--> */}
                  </div>
                ) : null}
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`I`}
                    name='reportType'
                    value='I'
                  />
                  <label className='u-no-margin u-small-margin-horizontal'>سوال تکراری است</label>
                </div>
              </div>
              {/* <!--ROW--> */}

              <div className='u-display-flex u-flex-column u-medium-padding-bottom o-col-lg-6 o-col-sm-12'>
                <div className='u-display-flex u-flex-row u-align-items-center'>
                  <Field
                    component='input'
                    type='radio'
                    className='u-no-margin u-small-margin-left'
                    id={`J`}
                    name='reportType'
                    value='J'
                  />
                  <label className='u-no-margin u-small-margin-horizontal'>موارد دیگر</label>
                </div>
              </div>
              {/* <!--ROW--> */}
            </div>
            <div className='u-display-flex u-medium-padding-vertical u-justify-content-center u-full-width'>
              <Button
                className='float-left  c-btn--outlineReport-blue c-btn--xlarge o-col-md-5'
                type='button'
                onClick={e => props.sendReport(e, formType)}
              >
                ارسال گزارش ۲/۵
              </Button>
            </div>
          </form>
        </div>
        <ModalModaretor show={props.showEdit} modalHandler={props.modalHandler} />
        <TagsModaretor
          show={props.showTags}
          tags={props.tags}
          deleteTag={props.deleteTag}
          modalTags={props.modalTags}
        />
        <ModeratorTextModal show={props.showText} modalText={props.modalText} />
      </div>
    </Modal>
  );
};

export default reduxForm({
  form: 'reportModerator', // <------ same form name
  destroyOnUnmount: true, // <------ preserve form data
  enableReinitialize: true
})(ReportModerator);
