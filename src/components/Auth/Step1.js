import React from 'react';
import {Form,Button} from 'react-bootstrap';
import symb from "../../assets/img/2.png";
import { Field, reduxForm } from 'redux-form';
import Timer from "react-compound-timer";

const Step1 = (props) => {
    console.log(props);
    const { handleSubmit,pristine,submitting } = props;

    
    return(
    <div>
    <div className="o-container-fluid"> 
        <div className='u-display-flex u-flex-row u-align-items-center u-justify-content-center o-row u-flex-column-sm'>
            <img className='c-modal__symbol o-col-sm-12 o-col-lg-3 u-order-md-last' src={symb} />
            <h4 className='c-modal__title u-horizontal-center o-col-sm-12 o-col-lg-6'>
            سلام من پرپام اسم شما چیه ؟
            </h4>
        </div>

        <div className="c-modal__mini u-medium-margin-top-sm">
            <div className="u-display-flex u-flex-column c-modal">        
                <form className="c-modal__login u-medium-margin-vertical c-form" onSubmit={handleSubmit}>
                    <Field  className="u-rounded u-small-margin-bottom u-full-width" type="text"  name="introName" component="input" placeholder="نام کوچک" required />
                    <div className="u-display-flex u-flex-row u-medium-margin-vertical u-justify-content-between u-align-items-center">
                        <button disabled={pristine || submitting} type="submit" className="c-btn c-btn--primary u-full-width u-rounded u-h4-font-size u-display-flex u-flex-row u-align-items-center u-justify-content-center">
                            مرحله بعد
                            <i className="fa fa-chevron-left u-small-margin-right"></i>
                        </button>
                    </div>
                </form>

                        
                

            </div>
        </div>
    </div>
    </div>

    );

}


export default reduxForm({
    form: 'step1',              // <------ same form name
    destroyOnUnmount: false,     // <------ preserve form data
    //validate
  })(Step1)