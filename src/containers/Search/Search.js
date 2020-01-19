/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Form} from "react-bootstrap";
//import {fetchQuestionsContent}  from '../../store/actions';

import symb from "../../assets/img/2.png";
///IMPORT QUESTIONS PAGE COMPONENTS
// import Aux from "../../hoc/Aux";
import SideNav from "../../components/Questions/SideNav";
import BigBanner from "../../components/Questions/BigBanner";
import Filters from "../../components/Questions/Filters";
import QuestionList from "../../components/Questions/QuestionList";
import MissionsBox from "../../components/Questions/MissionsBox";
import ChallengesBox from "../../components/Questions/ChallengesBox";
import FriendsBox from "../../components/Questions/FriendsBox";
import Modal from 'react-modal';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
class Search extends Component {

  constructor(props){

    super(props);
    this.state={
      modalIsOpen:true
    }

  }
  componentDidMount() {
      
      ///Fetch Data for Questions          
 
      
  }


  render() {
   
    return (
      <div className="o-container u-large-padding-vertical">

      {/* LOGIN/REGISTER  */}
        <Modal
          isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          //onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="c-modal__mini">
          <div className="u-display-flex u-flex-column c-modal">
         
              <img className="c-modal__symbol" src={symb}/>
              <h4 className="c-modal__title u-horizontal-center u-medium-margin-bottom u-small-margin-top">همیشه یکی هست که جواب رو میدونه</h4>
              <form className="c-modal__search u-medium-margin-bottom">
                <input type="text"/>
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
              <div className="u-display-flex u-flex-row u-align-items-center u-justify-content-between u-medium-margin-vertical">
                <a className="c-btn c-btn--primary u-rounded u-light-text-color u-full-width u-horizontal-center u-small-margin-left">
                  ورود
                </a>
                <a className="c-btn c-btn--outline u-rounded  u-full-width u-horizontal-center u-small-margin-right">
                  ثبت نام
                </a>
              </div>
              <form className="c-modal__login u-medium-margin-vertical c-form">
                <input className="u-rounded u-medium-margin-bottom u-full-width" type="text" placeholder="ایمیل یا شماره موبایل"/>
                <input className="u-rounded u-medium-margin-bottom u-full-width" type="text" placeholder="ایمیل یا شماره موبایل"/>

                <a className="c-btn c-btn--primary u-rounded u-light-text-color u-full-width u-horizontal-center u-small-margin-left">
                  ورود به حساب کاربری
                </a>
              </form>
          </div>
          </div>
        </Modal>


        {/* LOGIN/REGISTER  */}
        <Modal
          isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          //onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          
          <div className="u-display-flex u-flex-column c-modal">
         
              
              <h4 className="c-modal__title u-medium-margin-bottom u-small-margin-top">              
                <i className="fa fa-flag u-dark-blue-text-color u-h1-font-size u-medium-margin-left"></i>
                گزارش مشکل
              </h4>
              
          </div>
          
        </Modal>


        
        <section className="o-row">


          <div className="o-col-lg-9 o-col-md-6 o-col-sm-12 c-questions__main">
           
            <Filters/>
            <QuestionList/>
            <div className="u-medium-margin-top">
              <BigBanner/>
            </div>
           
          </div>

          <div className="o-col-lg-3 o-col-md-6 o-col-sm-12 c-questions__sidebar">
            <MissionsBox/>
            <ChallengesBox/>
            <FriendsBox/>
          </div>
                    
        </section>
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
    fetchQuestionsData: function () {
    
     },
    }
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
// export default Home;
