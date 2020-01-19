import React                                                             from  'react';
import { Field, reduxForm, FieldArray }                                  from 'redux-form';
import { Form, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton }  from 'react-bootstrap';

const NotificationForm = () => {
    return(
        <div className="o-container">
        <div className=" u-display-flex u-flex-row u-justify-content-between u-flex-column-md">
       <div className=" o-col-lg-2 u-order-md-first u-order-lg-last">
        <button type="button" class="btn c-btn--outlineReport c-btn--outlineReport__setting">ذخیره اطلاعات</button>
       </div>
       <div className="o-col-lg-10">
        <h5 className="c-setting-title">طریقه ی اطلاع رسانی</h5>
        <hr></hr>
       </div>
        </div>
                <div className="c-setting__information  u-medium-margin-right u-medium-margin-left" >
                    <h5>دریافت اطلاعات از طرق ایمیل</h5>
                <div className=" u-display-flex u-flex-column u-large-margin-bottom">
                    <div className="c-setting__radio-information u-display-flex u-flex-row">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">جواب بدی دریافت کردم</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">جواب من اکسپت شد</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">شخص از من تشکر کرد</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">شخص سوال من را فالو کرد</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed"> شخص در پستی که من فالو کرده بودم پست گذاشت</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">یکی از پست من ریپورت شد</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">در لیدربورد قرار گرفتم</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">سوالاتی که ممکنه من بتونم جواب بدم</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed"> چالش جدید شروع شد</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">بج  جدیدی به دست اوردم</label>
                    </div>
                </div>
                <hr></hr>
                <h5>دریافت اطلاعات از طرق ایمیل</h5>
                    <div className=" u-display-flex u-flex-column u-large-margin-bottom">
                        <div className="c-setting__radio-information u-display-flex u-flex-row">
                            <div>
                                <Field name="employed" id="employed" component="input" type="checkbox"/>
                            </div>
                                <label className="" htmlFor="employed">در لیدربورد قرار گرفتم</label>
                            </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">بج  جدیدی به دست اوردم</label>
                    </div>
                    <div className="c-setting__radio-information u-display-flex u-flex-row u-smallx-margin-top">
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                        <label className="" htmlFor="employed">  چالش جدیدی که ممکنه من علاقه مند باشم </label>
                    </div>
                    </div>
               </div>
       </div>
    )
}
export default reduxForm ({
    form: 'notificationForm', // <------ same form name
    destroyOnUnmount: false // <------ preserve form data
})(NotificationForm);
