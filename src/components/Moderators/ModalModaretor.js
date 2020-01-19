import React  from "react";
import Modal  from 'react-modal';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  };
const ModalModaretor = props => {
    const { handleToggle, addQuestion, pristine, submitting, state, deleteTag, addTag, handleChange, formType } = props;
    return (
        <Modal
        isOpen={props.show}
        //appElement='body'
        //onAfterOpen={this.afterOpenModal}
        //onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Add Question Modal"
      >
      <div className=" o-container  u-display-flex u-horizontal-center">
        <div className=" u-flex-column ">
          <h7>مقطع سوال اشتباه است</h7>
          <input type="text" class="c-modal_input-modaretor form-control u-medium-margin-top" id="pwd" placeholder="کلاس هفتم"/>
          <Field className="c-modal_form-modaretor u-smallx-margin-top u-smallx-margin-bottom" name="favoriteClass" component="select">
            <option>مقطع پیشنهادی</option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
          <button type="button" class="btn c-btn--outlineReport c-btn--outlineReport-modal-modaretor">تصحیح</button>
          <div className=" u-small-padding-top ">
          <button onClick={(e) => props.modalHandler(e)} type="button" class="btn c-btn--outlineReport c-btn--outlineReport-modal-modaretor c-btn--outlineReport-modal-modaretor-2 u-small-margin-top">بستن</button>
          </div>
        </div>
      </div>
      </Modal>
    )
}
export default reduxForm({
    form: 'modaltModerator', // <------ same form name
    destroyOnUnmount: false // <------ preserve form data
})(ModalModaretor);