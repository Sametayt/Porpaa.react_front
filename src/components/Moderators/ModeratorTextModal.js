import React                                                            from 'react';
import Modal                                                            from 'react-modal';
import { Field, reduxForm, FieldArray }                                 from 'redux-form';
import ReactQuill                                                       from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import close                                                            from '../../assets/img/Question/close.png';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

 
const customStyles = {
    content: {
      top: '53%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: 'auto',
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
 const ModeratorTextModal = props => {
    const { handleToggle, addQuestion, pristine, submitting, state, deleteTag, addTag, handleChange, formType } = props;
     return(
        <Modal
        isOpen={props.show}
        //appElement='body'
        //onAfterOpen={this.afterOpenModal}
        //onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Add Question Modal"
      >
      
     <div className="c-modal_question-moderator u-display-flex u-justify-content-between u-small-margin-vertical u-small-margin-horizontal u-medium-margin-left u-medium-margin-top">
        <h4 className="ml-auto">سوال</h4>
        <button type="button" class="btn c-btn--outlineReport u-smallx-margin-left-xs ">راهنما</button>
        <a onClick={(e) => props.modalText(e)} className="mr-4">
          <img src={close} width="20px" className="c-modal__close-modaretors-2 u-smallx-margin-top-xs"/>
        </a>
      </div>
          
      <div className="c-scroll-modal o-container u-display-flex u-flex-wrap u-flex-row o-col-12 u-full-width u-smallx-padding-vertical">
          
          
        <div className=" u-flex-wrap u-flex-column u-pull-right u-no-padding o-col-md-6 o-col-sm-12">
            <div>
                <p className=" u-large-line-height">متن سوال در این قسمت نوشته شده است <br/>سوال درباره ی فرمول های ریاضی و چگونگی حل <br />مسائل هندسی می باشد ما در هندسه چندتا از<br/> رسم های مختلف داشتیم که میتوانستیم انها<br /> را بررسی کنیم.</p>
            </div>
            <div className=" u-large-margin-top">
                <span className=" u-large-line-height">فرمول های ریاضی من درسته؟<br/>لطفا راهنمایی کنید<br/>مرسی</span>
            </div>
            <div className=" u-flex-row u-large-margin-top u-smallx-margin-bottom">
            <button type="button" class="btn c-btn--outlineReport c-btn--outlineReportright">بررسی ویرایش</button>
            <button type="button" class="btn c-btn--outlineReport">ذخیره ویرایش</button>
            </div>
        </div>
        <div className=" u-flex-wrap u-flex-column  u-no-padding o-col-md-6 o-col-sm-12">
          <div className=" u-full-width u-large-margin-bottom">
              <ReactQuill onChange={handleChange} theme='snow' modules={quillModules} />
            </div>
            <div className="c-modal__textModal u-smallx-padding-vertical">
                <p>در این قسمت عنوان سوال مشخص شده است که فرد ناظر می تواند  متن سوال و برچسب سوال <br />و درجه سختی سوال را  تغییر دهد و سپس ویرایش را انجام دهد در این قسمت عنوان سوال مشخص شده <br />است که فرد ناظر می تواند متن سوال و موضوع  سوال و برچسب سوال و درجه سختی سوال را تغییر دهد و سپش<br/>ویرایش نهایی را انجام دهد  در این قسمت عنوان سوال  مشخص شده است   که فرد ناظر می تواند  متن سوال <br/>و موضوع سوال و برچشب سوال است.</p>
            </div>
          </div>
        </div>
 </Modal>
     )
 }
 export default reduxForm({
    form: 'moderatorTextModal', // <------ same form name
    destroyOnUnmount: false // <------ preserve form data
})(ModeratorTextModal)