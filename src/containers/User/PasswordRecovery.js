import React, { Component } from 'react';
import Modal from 'react-modal';
import symb from '../../assets/img/2.png';
import { Form, Button, Tab, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RecoverPassword, passwordReset, resendCode } from '../../store/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

let phone;

class PassRecovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  changeStep = step => {
    setTimeout(() => {
      // _this.setState({ step: 2 });
      this.setState({ step: step });
    }, 100);
  };

  PasswordRecovery = e => {
    phone = document.querySelector('.phone-input').value;
    e.preventDefault();

    this.props
      .RecoverPassword(phone)
      .then(res => {
        if (res) {
          // _this.changeStep();
          this.changeStep(2);
        }
      })
      .catch(err => {
        alert('something wrong');
      });
  };

  CodeCheck = e => {
    let SentCode = document.querySelector('.code-input').value;
    let ActivationCode = this.props.app.activationCode.activationCode;
    
    if (SentCode == ActivationCode) {
      this.setState({
        step: 3
      });
    } else {
      alert('error');
    }
    e.preventDefault();
  };

  PassReset = e => {
    
    e.preventDefault();
    let phone = document.querySelector('.phone-input-2').value;
    let password1 = document.querySelector('.code-input-1').value;
    let password2 = document.querySelector('.code-input-2').value;
    let data = {
      phone: phone,
      password1: password1,
      password2: password2
    };
    this.props.passwordReset(data);
  };

  resendCode = () => {
    this.props.resendCode(phone);
    
  };

  render() {
    const { step } = this.state;
    if (step == 1) {
      return (
        <div className='o-container u-large-padding-vertical'>
          <Modal
            isOpen={true}
            //appElement='body'
            //onAfterOpen={this.afterOpenModal}
            //onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <div className='container-fluid'>
              <div className='u-display-flex u-flex-row u-align-items-center u-justify-content-center o-row u-flex-column-sm'>
                <img className='c-modal__symbol o-col-sm-4 u-order-md-last' src={symb} />
                <h4 className='c-modal__title u-horizontal-center o-col-sm-6'>شماره بده</h4>
              </div>
              <div className='c-modal__mini'>
                <div className='u-display-flex u-flex-column c-modal'>
                  <Form
                    className='c-modal__login u-medium-margin-vertical c-form'
                    noValidate
                    // validated={validated}
                    // onSubmit={this.handleLogin}
                  >
                    <Form.Group controlId='validationCustom05'>
                      <Form.Control
                        className='u-rounded u-medium-margin-bottom u-full-width phone-input'
                        type='text'
                        placeholder='شماره موبایل'
                        required
                        // name='phone'
                      />
                      <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      type='submit'
                      className='c-btn c-btn--primary u-rounded u-light-text-color u-full-width u-horizontal-center u-small-margin-left'
                      onClick={e => this.PasswordRecovery(e)}
                    >
                      بازنشانی رمز عبور
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      );
    } else if (step == 2) {
      if (document.querySelector('.phone-input')) {
        document.querySelector('.phone-input').value = '';
      }
      return (
        <div className='o-container u-large-padding-vertical'>
          <Modal
            isOpen={true}
            //appElement='body'
            //onAfterOpen={this.afterOpenModal}
            //onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <div className='container-fluid'>
              <div className='u-display-flex u-flex-row u-align-items-center u-justify-content-center o-row u-flex-column-sm'>
                <img className='c-modal__symbol o-col-sm-4 u-order-md-last' src={symb} />
                <h4 className='c-modal__title u-horizontal-center o-col-sm-6'>کد ارسال شده را وارد کنید</h4>
              </div>
              {/* <h5 className='u-justify-content-center u-display-flex u-flex-row'>کد ارسال شده را وارد کنید</h5> */}
              <div className='c-modal__mini'>
                <div className='u-display-flex u-flex-column c-modal'>
                  <Form
                    className='c-modal__login u-medium-margin-vertical c-form'
                    noValidate
                    // validated={validated}
                    // onSubmit={this.handleLogin}
                  >
                    <Form.Group controlId='validationCustom05'>
                      <Form.Control
                        className='u-rounded u-medium-margin-bottom u-full-width code-input'
                        type='text'
                        placeholder='کد'
                        required
                      />
                      <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      type='submit'
                      className='c-btn c-btn--primary u-rounded u-light-text-color u-full-width u-horizontal-center u-small-margin-left'
                      onClick={e => this.CodeCheck(e)}
                    >
                      بازنشانی رمز عبور
                    </Button>
                  </Form>
                </div>
              </div>
              <a
                href='#'
                className='forgot-password u-display-flex u-flex-row u-justify-content-center'
                onClick={this.resendCode}
              >
                رمز نیومد؟
              </a>
            </div>
          </Modal>
        </div>
      );
    } else if (step == 3) {
      document.querySelector('.code-input').value = '';
      return (
        <div className='o-container u-large-padding-vertical'>
          <Modal
            isOpen={true}
            //appElement='body'
            //onAfterOpen={this.afterOpenModal}
            //onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <div className='container-fluid'>
              <div className='u-display-flex u-flex-row u-align-items-center u-justify-content-center o-row u-flex-column-sm'>
                <img className='c-modal__symbol o-col-sm-4 u-order-md-last' src={symb} />
                <h4 className='c-modal__title u-horizontal-center o-col-sm-6'>رمز جدید چی باشه؟</h4>
              </div>
              <div className='c-modal__mini'>
                <div className='u-display-flex u-flex-column c-modal'>
                  <Form
                    className='c-modal__login u-medium-margin-vertical c-form'
                    noValidate
                    // validated={validated}
                    // onSubmit={this.handleLogin}
                  >
                    <Form.Group controlId='validationCustom05'>
                      <Form.Control
                        className='u-rounded u-medium-margin-bottom u-full-width phone-input-2'
                        type='text'
                        placeholder='شماره تلفن'
                        required
                        // name='phone'
                      />
                      <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='validationCustom05'>
                      <Form.Control
                        className='u-rounded u-medium-margin-bottom u-full-width code-input-1'
                        type='text'
                        placeholder='رمز عبور جدید'
                        required
                        // name='phone'
                      />
                      <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='validationCustom05'>
                      <Form.Control
                        className='u-rounded u-medium-margin-bottom u-full-width code-input-2'
                        type='text'
                        placeholder='تکرار رمز عبور جدید'
                        required
                        // name='phone'
                      />
                      <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      type='submit'
                      className='c-btn c-btn--primary u-rounded u-light-text-color u-full-width u-horizontal-center u-small-margin-left'
                      onClick={e => this.PassReset(e)}
                    >
                      بازنشانی رمز عبور
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = {
  RecoverPassword: RecoverPassword,
  passwordReset: passwordReset,
  resendCode: resendCode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassRecovery);

// email: "admintest@gmail.com"
// firstName: "milad"
// lastName: "ahmadi"
// phone: "09910760977"
// username: "admin1"
