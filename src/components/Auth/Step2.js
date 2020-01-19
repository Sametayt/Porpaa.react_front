import React from 'react';
import symb from '../../assets/img/2.png';
import defaultAvatar from '../../assets/img/default.png';
import { Field, reduxForm } from 'redux-form';
let disable = true;
const Step2 = props => {
  const { handleSubmit, pristine, submitting, registerForm, previousPage, fetchCity } = props;
  
  // console.log('STEP 2', props);
  if (
    props.registerForm.step2 &&
    props.registerForm.step2.values &&
    Object.keys(props.registerForm.step2.values).length > 10
  ) {
    disable = false;
  }
  return (
    <div>
      <div className="container-fluid">


        <div className="u-display-flex u-flex-row u-align-items-center u-justify-content-center u-large-padding-horizontal u-medium-padding-horizontal-sm o-row u-flex-column-sm u-medium-margin-bottom-sm">
          <img className="c-modal__symbol u-order-lg-last o-col-sm-12 o-col-lg-4 u-medium-margin-bottom-sm" src={symb} />
          <h4 className="c-modal__title c-modal__title_step2 o-col-lg-6 u-horizontal-right u-medium-margin-left o-col-sm-12 ">
            {registerForm.step1.values.introName} خیلی خوب شد که تو هم اومدی <br />
            باید بریم بهت بخش های مختلف سایت رو نشون بدم <br />
            فقط قبلش بیا کارت ورودت رو بسازیم <br />
          </h4>
        </div>
        <div className="c-modal__card u-display-flex u-flex-column c-modal">
          <form
            noValidate
            className="c-modal__login u-medium-margin-vertical u-large-margin-horizontal c-form"
            onSubmit={handleSubmit}
          >
            <div className="u-display-flex u-flex-row u-flex-column-sm flex c-register__card-form">
              <div className="flex c-register-card__basic u-display-flex u-flex-column">
                <img src={defaultAvatar} />
                <Field
                  className="u-rounded u-medium-margin-bottom u-full-width"
                  type="text"
                  component="input"
                  placeholder="نام کاربری"
                  required
                  name="username"
                />

                <Field
                  className="u-rounded u-medium-margin-bottom u-full-width"
                  type="password"
                  component="input"
                  placeholder=" رمز عبور"
                  required
                  name="password"
                />

                <Field
                  className="u-rounded u-medium-margin-bottom u-full-width"
                  type="password"
                  component="input"
                  placeholder="تکرار رمز عبور"
                  required
                  name="password2"
                  value=""
                />
              </div>

              <div className="flex c-register-card__more u-display-flex u-flex-row u-flex-wrap">
                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <Field
                    className="u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width"
                    type="text"
                    component="input"
                    placeholder=" نام"
                    value={registerForm.step1.values.introName}
                    required
                    name="firstName"
                  />
                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <Field
                    className="u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width"
                    type="text"
                    component="input"
                    placeholder=" نام خانوادگی"
                    required
                    name="lastName"
                  />
                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <Field
                    className="u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width"
                    type="text"
                    component="input"
                    type="text"
                    placeholder=" تلفن همراه"
                    required
                    name="phone"
                  />
                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <div className="c-form_selectholder">
                    <Field
                      name="gender"
                      required
                      component="select"
                      className="u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width"
                    >
                      <option value="">جنسیت</option>
                      <option value="man">مرد</option>
                      <option value="woman">زن</option>
                    </Field>
                  </div>
                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <div className="c-form_selectholder">
                    <Field
                      required
                      name="state"
                      component="select"
                      className="u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width"
                      onChange={data => fetchCity(data)}
                    >
                      <option value="">استان</option>
                      {/* <option value="1">sample</option> */}
                      {props.states.map(function(item) {
                        return <option value={item.name}>{item.name}</option>;
                      })}
                    </Field>
                  </div>
                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <div className="c-form_selectholder">
                    <Field
                      name="city"
                      required
                      component="select"
                      className="u-rounded u-display-block u-small-padding-horizontal u-medium-margin-bottom u-full-width"
                    >
                      <option value="">شهر</option>
                      {/* <option value="1">sample</option> */}
                      {props.cities && props.cities.length > 0
                        ? props.cities.map(function(item) {
                            return <option value={item._id}>{item.name}</option>;
                          })
                        : null}
                    </Field>
                  </div>
                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <div className="c-form_selectholder">
                    <Field
                      required
                      name="schoolLevel"
                      component="select"
                      className="u-rounded u-display-block u-small-padding-horizontal u-small-margin-bottom u-full-width"
                    >
                      <option value="">مقطع تحصیلی</option>                      
                      {props.schoolLevel
                        ? props.schoolLevel.map(item => {
                            return <option value={item._id}>{item.title}</option>;
                          })
                        : null}
                      {/* <option value="high_school">دبیرستان</option> */}
                      {/* <option value="elemntry_school">ابتدایی</option> */}
                    </Field>
                  </div>
                </div>

                <div className="o-col-lg-6 o-col-md-6 o-col-sm-12">
                  <div className="c-form_selectholder">
                    <Field
                      required
                      name="educationField"
                      component="select"
                      className="u-rounded u-display-block u-small-padding-horizontal u-small-margin-bottom u-full-width"
                    >
                      <option value="">رشته تحصیلی</option>                      
                      {props.educationLevel
                        ? props.educationLevel.map(item => {
                            return <option value={item._id}>{item.title}</option>;
                          })
                        : null}
                      {/* <option value="math">ریاضی</option>
                      <option value="medic">تجربی</option> */}
                    </Field>
                  </div>
                </div>
              </div>
            </div>

            <div className="u-display-flex u-flex-row u-medium-margin-vertical u-justify-content-between u-align-items-center u-flex-column-sm">
              <button
                onClick={previousPage}
                className="c-btn c-btn--outline u-full-width u-rounded u-h4-font-size u-display-flex u-flex-row u-align-items-center u-justify-content-center u-medium-margin-horizontal"
              >
                <i className="fa fa-chevron-right u-small-margin-left" />
                برگرد
              </button>
              <button
                disabled={disable}
                type="submit"
                className="c-btn c-btn--primary u-full-width u-rounded u-h4-font-size u-display-flex u-flex-row u-align-items-center u-justify-content-center u-medium-margin-horizontal"
              >
                مرحله بعد
                <i className="fa fa-chevron-left u-small-margin-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'step2', // <------ same form name
  destroyOnUnmount: false // <------ preserve form data
})(Step2);
