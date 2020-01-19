/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../store/actions';

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
          <div className='o-container-fluid'>
            <div className='u-align-items-center u-justify-content-center o-row u-flex-column-sm'>
              <img className='c-modal__symbol o-col-sm-4 o-col-md-3  order-md-last' src={symb} />
              <h4 className='c-modal__title u-horizontal-center  o-col-sm-6 o-col-md-8'>
                همیشه یکی هست که جواب رو میدونه
              </h4>
            </div>
            <div className='c-modal__mini u-medium-padding-bottom'>
              <div className='u-display-flex u-flex-column c-modal'>
                <div className='u-display-flex u-flex-row u-flex-column-sm u-align-items-center u-justify-content-between u-medium-margin-vertical'>
                  <div className='o-col-6 o-col-lg-6 o-col-sm-12 u-no-padding'>
                    <Link
                      to='/login'
                      className='c-btn c-btn--primary u-rounded u-light-text-color u-full-width u-horizontal-center u-small-margin-left u-no-margin-sm'
                      eventKey='login'
                    >
                      ورود
                    </Link>
                  </div>
                  <div className='o-col-6 o-col-lg-6 o-col-sm-12 u-no-padding u-small-margin-top-sm'>
                    <Link
                      to='/register'
                      className='c-btn c-btn--outline u-rounded  u-full-width u-horizontal-center u-small-margin-right u-no-margin-sm'
                      eventKey='register'
                    >
                      ثبت نام
                    </Link>
                  </div>
                </div>
              </div>
              <form className='c-modal__search u-large-margin-top u-small-margin-top-sm'>
                <input type='text' />
                <button type='submit'>
                  <i className='fa fa-search'></i>
                </button>
              </form>
            </div>
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
