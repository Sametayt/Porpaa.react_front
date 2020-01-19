 import React                                                           from 'react';
 import ReactTags                                                       from 'react-tag-autocomplete';
 import Modal                                                           from 'react-modal';
import { Field, reduxForm, FieldArray }                                 from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const customStyles = {
    content: {
      top: '50%',
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
 const TagsModaretor = props => {
    const { handleToggle, addQuestion, pristine, submitting, state, deleteTag, addTag, handleChange, formType } = props;
     return (
        <Modal
        isOpen={props.show}
        style={customStyles}
        contentLabel="Add Question Modal"
      >
        <div className="o-container o-col-lg-6">
          <div className="u-display-flex u-flex-column">
            <h7 className="u-horizontal-center">برچسب سوال اشتباه است</h7>
            <div className="c-box_moderator-tags u-small-padding-horizontal u-small-padding-vertical u-smallx-margin-bottom u-medium-margin-top">
            <span className="c-box__moderator-small-tags u-medium-padding-horizontal">a</span>
            </div>
            <div className="c-box__react-tags">
            <ReactTags
                                classNames="u-full-width u-flex-wrap u-small-margin-top"
                                tags={props.tags}
                                suggestions={props.tags}
                                handleDelete={(item) => deleteTag(item)}
                                placeholder="تگ ها"
                                allowNew={false}
                                handleAddition={(item) => addTag(item)} />
            </div>
            <div>
            <button type="button" class="btn c-btn--outlineReport c-btn--outlineReport-modal-modaretor">تصحیح</button>
            <div className=" u-small-padding-top ">
            <button onClick={(e) => props.modalTags(e)} type="button" class="btn c-btn--outlineReport c-btn--outlineReport-modal-modaretor u-small-margin-top">بستن</button>
          </div>
            </div>
          </div>
        </div>
      </Modal>
     );
 };
 export default reduxForm({
    form: 'tagsModaretor', // <------ same form name
    destroyOnUnmount: false // <------ preserve form data
 })(TagsModaretor);
