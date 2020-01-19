import React from 'react';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import easy from '../../assets/img/Question/Difficult1.svg';
import medium from '../../assets/img/Question/Difficult3.svg';
import hard from '../../assets/img/Question/Difficult2.svg';
import ReactTags from 'react-tag-autocomplete';

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
const AddQuestion = props => {
  const { addQuestion, pristine, submitting, state, deleteTag, addTag, handleChange } = props;

  return (
    <Modal
      isOpen={props.show}
      //appElement='body'
      //onAfterOpen={this.afterOpenModal}
      //onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel='Add Question Modal'
    >
      <div className="c-scroll-modal u-display-flex u-flex-column u-align-items-center">
        <div className='o-row c-ask u-full-width'>
          <h2 className='o-col-lg-12 o-col-md-12 o-col-sm-12 u-medium-margin-bottom u-display-none-max-md'>نوشتن سوال</h2>
          <div className='o-col-lg-6 o-col-md-12 o-col-sm-12 u-align-items-center-sm u-small-margin-top'>
            <Form className='c-ask__form  c-form u-full-width u-smallx-margin-top-xs' onSubmit={addQuestion} validated={props.state.validated}>
              <Form.Control
                className='u-rounded u-display-flex u-small-padding-horizontal  u-full-width u-medium-margin-bottom u-small-padding-vertical'
                type='text'
                placeholder=' عنوان سوال'
                required
                name='title'
              />

              <Form.Control
                as='select'
                name='subject'
                className='u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width'
                required
              >
                <option value=''>موضوع درس</option>
                {props.data.length > 0
                  ? props.data.map(function(item) {
                      return (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      );
                    })
                  : null}
              </Form.Control>

              <ReactTags
                classNames='u-full-width u-flex-wrap'
                tags={state.tags}
                suggestions={props.tags}
                handleDelete={item => deleteTag(item)}
                placeholder='تگ ها'
                allowNew={false}
                handleAddition={item => addTag(item)}
              />

              <div className='u-display-flex u-flex-row u-align-items-center u-justify-content-center u-flex-column-sm'>
                <p className='u-no-margin u-small-margin-bottom-sm'>درجه سختی سوال</p>
                <ButtonToolbar className='c-filter__checkbox c-filter__checkbox_question u-smallx-margin-right'>
                  <ToggleButtonGroup type='radio' name='difficulty' defaultValue='easy'>
                    <ToggleButton variant='light' value='easy'>
                      <img src={easy} />
                      <p className='u-display-block u-no-margin u-small-font-size'>آسان</p>
                    </ToggleButton>
                    <ToggleButton variant='light' value='medium'>
                      <img src={medium} />
                      <p className='u-display-block u-no-margin u-small-font-size'>متوسط</p>
                    </ToggleButton>
                    <ToggleButton variant='light' value='hard'>
                      <img src={hard} />
                      <p className='u-display-block u-no-margin u-small-font-size'>سخت</p>
                    </ToggleButton>
                  </ToggleButtonGroup>
                </ButtonToolbar>
              </div>

              <h2 className='o-col-lg-12 o-col-md-12 o-col-sm-12 u-large-margin-top u-display-flex u-align-items-center u-justify-content-center u-flex-column-sm'>
                <Button type='submit' className='c-btn c-btn--success u-h3-font-size u-rounded'>
                  انتشار سوال
                </Button>
                <Button
                  onClick={() => props.toggleModal()}
                  className='c-btn c-btn--primary c-btn--primary-scroll u-h3-font-size u-rounded w-25 u-smallx-margin-right u-no-margin-sm'
                >
                  انصراف
                </Button>
              </h2>
            </Form>
          </div>

          <div className='c-filter__quill o-col-lg-6 o-col-md-12 o-col-sm-12 u-order-sm-first u-order-lg-last'>
            <ReactQuill onChange={handleChange} theme='snow' modules={quillModules} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default reduxForm({
  form: 'addQuestion', // <------ same form name
  destroyOnUnmount: false // <------ preserve form data
})(AddQuestion);
