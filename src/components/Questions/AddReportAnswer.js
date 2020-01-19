import React from 'react';
import Modal from 'react-modal';
import { Field, reduxForm , FieldArray } from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import timerFull from '../../assets/img/Question/Time1.svg';
import timerMedium from '../../assets/img/Question/Time2.svg';
import close from '../../assets/img/Question/close.png';
import baseline from '../../assets/img/Question/baseline-outlined_flag-24px.svg';

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

const AddReportAnswer = props => {
  const { handleToggle, addQuestion, pristine, submitting, state, deleteTag, addTag, handleChange,formType } = props;
  return (
    <Modal
      isOpen={props.show}
      //appElement='body'
      //onAfterOpen={this.afterOpenModal}
      //onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Add Question Modal"
    >
      <div className="u-display-flex u-flex-column">
        <div className="o-col-lg-12 o-col-md-12 o-col-sm-12">
          <div class="u-display-flex u-flex-row u-medium-margin-bottom u-justify-content-between">
            <div className="u-display-flex u-flex-row u-align-items-center">
              <img src={baseline} width="40px" className="u-small-margin-left" />
              <h4 className="u-h4-font-size u-small-margin-left u-no-margin">گزارش تخلف</h4>
            </div>
            <a onClick={() => props.toggleReport()}>
              <img src={close} width="20px" />
            </a>
          </div>
          <form type={props.type}>              
                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center u-small-margin-bottom">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`A`} name="reportType" value="A" />
                        <label className="u-no-margin u-small-margin-horizontal">خلاف قوانین پرپا</label>
                    </div>  

                    {
                        props.type && props.type.reportType == "A"

                        ?
                            <div className="u-display-flex u-flex-row  u-justify-content-start">
                                    <div className="u-display-flex u-flex-row u-align-items-center">
                                        <Field component="input"  type="checkbox" name="A-1" value="A-1" />
                                        <label className="u-no-margin u-small-margin-horizontal">محتوای غیر اخلاقی</label>  
                                    </div>
                                    {/* <!--ITEM--> */}

                                    <div className="u-display-flex u-flex-row u-align-items-center">
                                        <Field component="input"  type="checkbox" name="A-2" value="A-2" />
                                        <label className="u-no-margin u-small-margin-horizontal">محتوای غیر اخلاقی</label>  
                                    </div>
                                    {/* <!--ITEM--> */}

                                    <div className="u-display-flex u-flex-row u-align-items-center">             
                                        <Field component="input"  type="checkbox" name="A-3" value="A-3" />
                                        <label className="u-no-margin u-small-margin-horizontal">خشونت کلامی</label>  
                                    </div>
                                    {/* <!--ITEM--> */}
                            </div>

                        :null
                    }                 
                    
                </div>
                {/* <!--ROW--> */}


                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`B`} name="reportType" value="B" />
                        <label className="u-no-margin u-small-margin-horizontal">دارای تبلیغات</label>
                    </div>                                   
                </div>
                {/* <!--ROW--> */}


                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center u-small-margin-bottom">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`C`} name="reportType" value="C" />
                        <label className="u-no-margin u-small-margin-horizontal">دارای لینک</label>
                    </div>                   
                    {
                        props.type && props.type.reportType == "C"

                        ?<div className="u-display-flex u-flex-row  u-justify-content-start">
                            <div className="u-display-flex u-flex-row u-align-items-center">
                                <Field component="input"  type="checkbox" name="C-1" value="C-1" />
                                <label className="u-no-margin u-small-margin-horizontal">درخواست لینک از سوال پرسنده دارد</label>  
                            </div>
                            {/* <!--ITEM--> */}

                            <div className="u-display-flex u-flex-row u-align-items-center">
                                <Field component="input"  type="checkbox" name="C-2" value="C-2" />
                                <label className="u-no-margin u-small-margin-horizontal">لینک به صفحات اجتماعی دیگر</label>  
                            </div>
                            {/* <!--ITEM--> */}

                            <div className="u-display-flex u-flex-row u-align-items-center">             
                                <Field component="input"  type="checkbox" name="C-3" value="C-3" />
                                <label className="u-no-margin u-small-margin-horizontal">لینک به وبسایت های نا مشخص</label>  
                            </div>
                            {/* <!--ITEM--> */}
                         </div>

                    :null
                    }
                </div>
                {/* <!--ROW--> */}


                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`D`} name="reportType" value="D" />
                        <label className="u-no-margin u-small-margin-horizontal">دارای اطلاعات شخصی</label>
                    </div>                                   
                </div>
                {/* <!--ROW--> */}


                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center u-small-margin-bottom">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`E`} name="reportType" value="E" />
                        <label className="u-no-margin u-small-margin-horizontal">سوال اشتباه است</label>
                    </div>                   
                    {
                        props.type && props.type.reportType == "E"

                        ?<div className="u-display-flex u-flex-row  u-justify-content-start">
                            <div className="u-display-flex u-flex-row u-align-items-center">
                                <Field component="input"  type="checkbox" name="E-1" value="E-1" />
                                <label className="u-no-margin u-small-margin-horizontal">سوال گنگ است</label>  
                            </div>
                            {/* <!--ITEM--> */}

                            <div className="u-display-flex u-flex-row u-align-items-center">
                                <Field component="input"  type="checkbox" name="E-2" value="E-2" />
                                <label className="u-no-margin u-small-margin-horizontal">سوال خیلی کلی است</label>  
                            </div>
                            {/* <!--ITEM--> */}

                            <div className="u-display-flex u-flex-row u-align-items-center">             
                                <Field component="input"  type="checkbox" name="E-3" value="E-3" />
                                <label className="u-no-margin u-small-margin-horizontal">سوال بسیار ساده و بی محتواست</label>  
                            </div>
                            {/* <!--ITEM--> */}
                    </div>

                    :null
                    
                    }
                </div>
                {/* <!--ROW--> */}


                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`F`} name="reportType" value="F" />
                        <label className="u-no-margin u-small-margin-horizontal">سوال بر پایه نظر شخصی است و جواب مشخص ندارد</label>
                    </div>                                   
                </div>
                {/* <!--ROW--> */}


                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center u-small-margin-bottom">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`G`} name="reportType" value="G" />
                        <label className="u-no-margin u-small-margin-horizontal">سوال نامرتبط است</label>
                    </div>                   
                    {
                        props.type && props.type.reportType == "G"

                        ?<div controlId="G" className="u-display-flex u-flex-row  u-justify-content-start">
                            <div className="u-display-flex u-flex-row u-align-items-center">
                                <Field component="input"  type="checkbox" name="G-1" value="G-1" />
                                <label className="u-no-margin u-small-margin-horizontal">موضوع سوال غلط انتخاب شده است</label>  
                            </div>
                            {/* <!--ITEM--> */}

                            <div className="u-display-flex u-flex-row u-align-items-center">
                                <Field component="input"  type="checkbox" name="G-2" value="G-2" />
                                <label className="u-no-margin u-small-margin-horizontal">برچسب سوال غلط انتخاب شده است</label>  
                            </div>
                            {/* <!--ITEM--> */}

                            <div className="u-display-flex u-flex-row u-align-items-center">             
                                <Field component="input"  type="checkbox" name="G-3" value="G-3" />
                                <label className="u-no-margin u-small-margin-horizontal">سوال بسیار ساده و بی محتواست</label>  
                            </div>
                            {/* <!--ITEM--> */}
                    </div>
                    :null
                    }
                </div>
                {/* <!--ROW--> */}

                <div class="u-display-flex u-flex-column u-medium-padding-bottom">
                    <div className="u-display-flex u-flex-row u-align-items-center u-small-margin-bottom">
                        <Field component="input"  type="radio" className="u-no-margin u-small-margin-left" id={`H`} name="reportType" value="H" />
                        <label className="u-no-margin u-small-margin-horizontal">سوال تکراری است</label>
                    </div>                   
                    <div className="u-display-flex u-flex-row  u-justify-content-start">
                            <div className="u-display-flex u-flex-row u-align-items-center u-justify-content-between">

                                <label className="u-no-margin u-small-margin-horizontal">لینک صفحه مشابه را وارد کن</label>  
                                <Field component="input"  type="text" name="H" placeholder="http://"  className="u-dir-ltr o-col-md-3 u-medium-margin-right u-medium-margin-left"/>
                               
                            </div>
                    </div>
                </div>
                {/* <!--ROW--> */}
                         
            
            <Button className="float-left c-btn c-btn--outlineReport" type="button" onClick={(e)=>props.sendReport(e,formType,props.id)}>
              ثبت گزارش
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default reduxForm({
  form: 'addReport', // <------ same form name
  destroyOnUnmount: false // <------ preserve form data
})(AddReportAnswer);
