/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Tab, Nav } from 'react-bootstrap';
import { login } from '../../store/actions';
import Loader from '../../components/Common/Loader';
import symb from '../../assets/img/2.png';
///IMPORT QUESTIONS PAGE COMPONENTS
import Modal from 'react-modal';
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
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      setValidated: false,
      validated: false
    };
  }
  componentDidMount() {}

  handleLogin = event => {
    const { loginAction } = this.props;
    const form = event.currentTarget;
    ///CHeck form validation
    if (form.checkValidity() === false) {
      this.setState({ validated: true });
    } else {
      ///get form data
      this.setState({ validated: false });
      const data = {};
      data.username = form.elements.username.value;
      data.password = form.elements.password.value;

      this.props.loginAction(data);
    }
    this.setState({ setValidated: true });
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { validated } = this.state;
    if (this.props.app.loader) {
      return <Loader />;
    }
    return (
      <div className='o-container u-large-padding-vertical'>
        {/* LOGIN/REGISTER  */}
        <Modal
          isOpen={this.state.modalIsOpen}
          //appElement='body'
          //onAfterOpen={this.afterOpenModal}
          //onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <div className='container-fluid'>
            <div className='u-display-flex u-flex-row u-align-items-center u-justify-content-center o-row u-flex-column-sm'>
              <img className='c-modal__symbol o-col-sm-4 u-order-md-last' src={symb} />
              <h4 className='c-modal__title u-horizontal-center o-col-sm-6'>چه خوب شد برگشتی</h4>
            </div>
            <div className='c-modal__mini'>
              <div className='u-display-flex u-flex-column c-modal'>
                <Tab.Container id='left-tabs-example' defaultActiveKey='login'>
                  <Tab.Content>
                    <Tab.Pane eventKey='login'>
                      <Form
                        className='c-modal__login u-medium-margin-vertical c-form'
                        noValidate
                        validated={validated}
                        onSubmit={this.handleLogin}
                      >
                        <Form.Group controlId='validationCustom05'>
                          <Form.Control
                            className='u-rounded u-medium-margin-bottom u-full-width'
                            type='text'
                            placeholder='ایمیل یا شماره موبایل'
                            required
                            name='username'
                          />
                          <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId='validationCustom06'>
                          <Form.Control
                            className='u-rounded u-medium-margin-bottom u-full-width'
                            type='password'
                            placeholder='رمز عبور'
                            required
                            name='password'
                          />
                          <Form.Control.Feedback type='invalid'>تکمیل این فیلد اجباری است</Form.Control.Feedback>
                        </Form.Group>

                        <Button
                          type='submit'
                          className='c-btn c-btn--primary u-rounded u-light-text-color u-full-width u-horizontal-center u-small-margin-left'
                        >
                          ورود به حساب کاربری
                        </Button>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey='register'>
                      <p>ajksh</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
            <a
              href='#'
              className='forgot-password u-display-flex u-flex-row u-justify-content-center'
              onClick={e => window.location.replace('/recoverpassword')}
            >
              رمز عبور رو فراموش کردی ؟
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAction: function(data) {
      dispatch(login(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
// export default Home;
