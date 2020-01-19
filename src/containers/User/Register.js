/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import {
  register,
  fetchState,
  fetchCities,
  verifyNumber,
  fetchEducationFields,
  fetchSchoolLevels
} from '../../store/actions';
import { reduxForm } from 'redux-form/immutable';

///IMPORT REGISTER PAGE COMPONENTS
import Modal from 'react-modal';
import Step1 from '../../components/Auth/Step1';
import Step2 from '../../components/Auth/Step2';
import Step3 from '../../components/Auth/Step3';
import Loader from '../../components/Common/Loader';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    height: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
let _this;
class Register extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.fetchCities = this.fetchCities.bind(this);
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
    this.changeBtnStatus = this.changeBtnStatus.bind(this);
    this.verifyNumber = this.verifyNumber.bind(this);
    this.state = {
      modalIsOpen: true,
      setValidated: false,
      validated: false,
      page: 1,
      active: true
    };
    _this = this;
  }
  componentDidMount() {
    console.log('REGISTER PROPS', this.props);

    this.props.fetchState();
    this.props.fetchEducationFields();
    this.props.fetchSchoolLevels();
  }

  nextPage(data) {
    if (this.state.page == 2) {
      this.onSubmitRegister();
    } else {
      this.setState({ page: this.state.page + 1 });
    }
  }

  previousPage(data) {
    this.setState({ page: this.state.page - 1 });
  }

  changeStep = step => {
    
    setTimeout(() => {
      _this.setState({ page: step });
    }, 100);
  };

  onSubmitRegister = () => {
    //let code = data.verificationCode;
    let registerData = this.props.form.step2.values;
    registerData.email = this.props.form.step2.values.username;
    
    this.props
      .registerAction(registerData)
      .then(res => {
           
          if(res){
            _this.changeStep(3);
          }
       
        console.log(res);
      })
      .catch(err => {
        // console.log(res)
        alert('something wrong');
      });

    // return this.props.registerAction(registerData)
    //   .then((da) =>{
    //      
    //     this.setState({ page: this.state.page + 1 })
    //   })
    //   .catch((err) => {
    //      
    //     throw err; // To prevent transition back
    //   });
  };

  verifyNumber = () => {
    let code = this.props.form.step3.values.verificationCode;
    let phone = this.props.form.step2.values.phone;
     
    this.props
      .verifyNumber(code, phone)
      .then(res => {
        window.location.replace('/login');
        console.log(res);
      })
      .catch(err => {
        // console.log(res)
        alert('something went wrong');
      });
  };
  fetchCities = data => {
    if (data.currentTarget.value && data.currentTarget.value != '') {
      this.props.fetchCities(data.currentTarget.value);
    }
  };

  changeBtnStatus = state => {
    this.setState({ active: state });
  };

  render() {
    const { onSubmit, app } = this.props;
    const { page } = this.state;
    if (this.props.app.loader) {
        return <Loader />;
      }
    //  
    // if (this.props.app.register && this.props.app.register.isSuccessful && this.state.page === 2) {
    //   this.setState({ page: 3 });
    // }
    return (
      <div className="o-container u-large-padding-vertical">
        <Modal
          isOpen={this.state.modalIsOpen}
          //appElement='body'
          //onAfterOpen={this.afterOpenModal}
          //onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {page === 1 && <Step1 registerForm={this.props.form} onSubmit={this.nextPage} />}
          {page === 2 && (
            <Step2
              schoolLevel={this.props.app.schoolLevels.data}
              educationLevel={this.props.app.educationFields.data}
              cities={this.props.app.cities.data}
              states={this.props.app.state.data}
              fetchCity={this.fetchCities}
              registerForm={this.props.form}
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <Step3
              active={this.state.active}
              changeBtnStatus={this.changeBtnStatus}
              registerForm={this.props.form}
              previousPage={this.previousPage}
              onSubmit={this.verifyNumber}
            />
          )}
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

const mapDispatchToProps = {
  // registerAction: register(data),
  // fetchState: fetchState(),
  // fetchCities: fetchCities(data),
  // verifyNumber: verifyNumber(code, phone),
  // fetchSchoolLevels: fetchSchoolLevels(),
  // fetchEducationFields: fetchEducationFields(),
  registerAction: register,
  fetchState: fetchState,
  fetchCities: fetchCities,
  verifyNumber: verifyNumber,
  fetchSchoolLevels: fetchSchoolLevels,
  fetchEducationFields: fetchEducationFields
};

export default compose(
  reduxForm({
    form: 'register', // a unique identifier for this form
    destroyOnUnmount: false
  }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Register);
// export default Home;
