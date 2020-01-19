import React from 'react';
import symb from '../../assets/img/2.png';
import defaultAvatar from '../../assets/img/default.png';
import { Field, reduxForm } from 'redux-form';
import { Timer } from 'react-compound-timer';
const Step3 = props => {
  const { handleSubmit, pristine, submitting, registerForm, previousPage, active } = props;
  // console.log('STEP 3', props);
  const askSend = reset => {
    reset();
    props.changeBtnStatus(true);
  };
  return (
    <div className="o-container-fluid">
      <div className='u-display-flex u-flex-row u-align-items-center o-col-lg-3 u-justify-content-center o-row u-flex-column-sm'>
            <img className='c-modal__symbol o-col-sm-12 u-order-md-last' src={symb} />
            <h4 className='c-modal__title u-horizontal-center o-col-sm-12 o-col-lg-6'>
                {registerForm.step1.values.introName} کد تایید برات فرستاده شد <br />
                لطفا در اینجا وارد کن<br />
            </h4>
        </div>
      <div className="u-display-flex u-flex-column c-modal">
        <form
          noValidate
          className="c-modal__login u-medium-margin-vertical u-large-margin-horizontal c-form"
          onSubmit={handleSubmit}
        >
          <div className="u-display-flex u-flex-row u-flex-column-sm flex c-register__card-form">
            <div className="flex u-display-flex u-flex-row u-flex-wrap u-large-padding-vertical u-large-padding-horizontal u-full-width  u-medium-padding-vertical-sm u-small-padding-horizontal-sm">
              <div className="o-col-lg-12 o-col-md-12 o-col-sm-12 u-flex-row u-display-flex u-align-items-center">
                <p className="c-form__label-group u-display-flex u-no-margin u-medium-padding-horizontal">کد تایید</p>
                <Field
                  className="u-rounded u-display-flex u-medium-padding-horizontal  u-full-width c-form__verification u-medium-padding-vertical "
                  type="text"
                  component="input"
                  placeholder=" کد تایید"
                  required
                  name="verificationCode"
                />
              </div>

              {/* <Timer
                initialTime={5000}
                timeToUpdate={2000}
                direction="backward"
                checkpoints={[
                  {
                    time: 0,
                    callback: () => props.changeBtnStatus(false)
                  },
                  {
                    time: 5000,
                    callback: () => alert()
                  }
                ]}
                onStop={() => alert(2)}
              >
                {({ start, resume, pause, stop, reset, timerState }) => (
                  <React.Fragment>
                    <div className="u-medium-margin-top u-display-flex u-flex-row u-align-items-center u-justify-content-between">
                      <button
                        disabled={active}
                        onClick={() => askSend(reset)}
                        className="c-register__send-again u-h3-font-size u-primary-color u-bold-weight"
                      >
                        دوباره بفرست
                      </button>
                      <div className="c-register__timer u-h3-font-size u-bold-weight">
                        <Timer.Minutes />
                        :
                        <Timer.Seconds />
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </Timer> */}
            </div>
          </div>

          <div className="u-display-flex u-flex-row u-medium-margin-vertical u-justify-content-between u-align-items-center  u-flex-column-sm">
            <button
              onClick={previousPage}
              className="c-btn c-btn--outline u-full-width u-rounded u-h4-font-size u-display-flex u-flex-row u-align-items-center u-justify-content-center u-medium-margin-horizontal o-col-sm-12 u-no-margin-sm u-medium-margin-bottom-sm"
            >
              <i className="fa fa-chevron-right u-small-margin-left" />
              برگرد
            </button>

            <button
              disabled={pristine || submitting}
              type="submit"
              className="c-btn c-btn--primary u-full-width u-rounded u-h4-font-size u-display-flex u-flex-row u-align-items-center u-justify-content-center u-medium-margin-horizontal o-col-sm-12 u-no-margin-sm"
            >
              بریم
              <i className="fa fa-chevron-left u-small-margin-right" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'step3', // <------ same form name
  destroyOnUnmount: false // <------ preserve form data
})(Step3);
