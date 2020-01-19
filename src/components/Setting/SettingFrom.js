import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
const data = {
  // used to populate "account" reducer when "Load" is clicked
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  sex: 'female',
  showFields: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
};

// let onChangeHandler;

let SettingForm = props => {
  // onChangeHandler = (event, newValue, previousValue, name) => {
  //   debugger;
  //   props.getCity(name);
  // };

  return (
    <div className='o-container'>
      <form
        onSubmit={e => props.updateUser(e)}
        className='u-large-padding-bottom u-medium-margin-right u-medium-margin-left'
      >
        <div className='u-display-flex u-flex-row u-medium-margin-bottom u-justify-content-end'>
          <button
            type='submit'
            disabled={props.pristine || props.submitting}
            class='btn c-btn--outlineReport c-btn--outlineReport__setting'
          >
            ذخیره اطلاعات
          </button>
        </div>
        <div className=' u-display-flex u-flex-row u-smallx-margin-bottom u-flex-column-md u-flex-column-sm'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>اسم</label>
          <div className=' u-full-width o-col-lg-8 o-col-md-12 o-col-sm-12'>
            <Field className='c-setting__from-content' name='firstName' component='input' type='text' />
          </div>
        </div>
        <div className=' u-display-flex u-flex-row u-smallx-margin-bottom u-flex-column-md u-flex-column-sm'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>فامیلی</label>
          <div className=' u-full-width o-col-lg-8 o-col-md-12 o-col-sm-12'>
            <Field className='c-setting__from-content' name='lastName' component='input' type='text' />
          </div>
        </div>
        <div className=' u-display-flex u-flex-row u-smallx-margin-bottom u-flex-column-md u-flex-column-sm'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>نام کاربری</label>
          <div className=' u-full-width o-col-lg-8 o-col-md-12 o-col-sm-12'>
            <Field className='c-setting__from-content' name='username' component='input' />
          </div>
        </div>

        <div className=' u-display-flex u-flex-row u-smallx-margin-bottom u-flex-column-md u-flex-column-sm'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>ایمیل</label>
          <div className=' u-full-width o-col-lg-8 o-col-md-12 o-col-sm-12'>
            <Field className='c-setting__from-content' name='email' component='input' type='email' />
          </div>
        </div>
        <div className='u-display-flex u-flex-row u-smallx-margin-bottom u-flex-column-md u-flex-column-sm'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>جنسیت</label>
          <div className='c-setting-radio  u-display-flex u-flex-row o-col-lg-8 o-col-md-12 o-col-sm-12'>
            <label className='o-col-lg-2 o-col-md-8 o-col-sm-8 u-display-flex'>
              <Field name='gender' component='input' type='radio' value='man' /> مرد
            </label>
            <label className='o-col-lg-2 o-col-md-4 o-col-sm-4 u-display-flex'>
              <Field name='gender' component='input' type='radio' value='woman' /> زن
            </label>
            {/* <label className="o-col-lg-2 o-col-md-12 o-col-sm-12 u-display-flex"><Field  name="gender" component="input" type="radio" value="female"/> نامشخص</label> */}
          </div>
          <div className='c-setting_checkbox o-col-lg-2 o-col-md-4 o-col-sm-7 u-display-flex u-flex-row u-justify-content-between u-small-margin-top'>
            <div>
              <Field name='showFields.gender' component='input' type='checkbox' />
            </div>
            <label className='c-setting__lable'>فقط دوستان من ببینند</label>
          </div>
        </div>

        <div className='c-setting__dropdown-parent u-display-flex u-flex-row u-flex-column-sm u-flex-column-md'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>تاریخ تولد</label>
          <div className=' o-col-lg-8 o-col-md-12 o-col-sm-12 u-display-flex u-flex-row'>
            <Field
              className='c-setting__dropdown-right o-col-lg-3 o-col-md-3'
              name='day'
              component='select'
              placeholder='روز'
            >
              <option>روز</option>
              <option value='ff0000'>Red</option>
              <option value='00ff00'>Green</option>
              <option value='0000ff'>Blue</option>
            </Field>
            <Field className='o-col-lg-3 o-col-md-3' name='month' component='select'>
              <option>ماه</option>
              <option value='ff0000'>Red</option>
              <option value='00ff00'>Green</option>
              <option value='0000ff'>Blue</option>
            </Field>
            <Field className='c-setting__dropdown-left o-col-lg-3 o-col-md-3' name='year' component='select'>
              <option>سال</option>
              <option value='ff0000'>Red</option>
              <option value='00ff00'>Green</option>
              <option value='0000ff'>Blue</option>
            </Field>
          </div>
          <div className='c-setting_checkbox o-col-lg-2 o-col-md-4 o-col-sm-7 u-display-flex u-flex-row u-justify-content-between u-small-margin-top'>
            <div>
              <Field name='showFields.birthDate' component='input' type='checkbox' />
            </div>
            <label className='c-setting__lable'>فقط دوستان من ببینند</label>
          </div>
        </div>
        <div className='c-setting__from-content-drop u-flex-column-md u-flex-column-sm u-display-flex u-flex-row u-smallx-margin-top'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>مقطع درسی</label>
          <div className=' o-col-lg-8'>
            <Field className='c-setting__from-content-2 o-col-lg-9 o-col-sm-12' name='schoolLevel' component='select'>
              {props.schoolLevels.data && props.schoolLevels.data.length > 0
                ? props.schoolLevels.data.map(item => {
                    return <option value={item._id}>{item.title}</option>;
                  })
                : null}
            </Field>
          </div>
        </div>
        <div className='c-setting__from-content-drop u-flex-column-md u-flex-column-sm u-display-flex u-flex-row u-smallx-margin-top'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>رشته درسی</label>
          <div className=' o-col-lg-8'>
            <Field
              className='c-setting__from-content-2 o-col-lg-9 o-col-sm-12'
              name='educationField'
              component='select'
              placeholder='روز'
            >
              {props.educationFields.data && props.educationFields.data.length > 0
                ? props.educationFields.data.map(item => {
                    return <option value={item._id}>{item.title}</option>;
                  })
                : null}
            </Field>
          </div>
        </div>
        <div className='c-setting__from-content-drop u-flex-column-md u-flex-column-sm u-display-flex u-flex-row u-justify-content-between u-smallx-margin-top'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'> استان</label>
          <div className='o-col-lg-8'>
            <Field
              className='c-setting__from-content-2 o-col-lg-9 o-col-sm-12'
              name='state'
              component='select'
              placeholder='استان'
              // onChange={onChangeHandler}
              onChange={data => props.getCity(data)}
            >
              {props.states.data && props.states.data.length > 0
                ? props.states.data.map(item => {
                    return <option value={item.name}>{item.name}</option>;
                  })
                : null}
            </Field>
          </div>
          <div className='c-setting_checkbox o-col-lg-2 o-col-md-4 o-col-sm-7 u-display-flex u-flex-row u-justify-content-between u-small-margin-top'>
            <div>
              <Field name='showFields.state' component='input' type='checkbox' />
            </div>
            <label className='c-setting__lable'>فقط دوستان من ببینند</label>
          </div>
        </div>
        <div className='c-setting__from-content-drop u-flex-column-md u-flex-column-sm u-display-flex u-flex-row u-justify-content-between u-smallx-margin-top'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'> شهر</label>
          <div className=' o-col-lg-8'>
            <Field
              className='c-setting__from-content-2 o-col-lg-9 o-col-sm-12'
              name='city'
              component='select'
              placeholder='روز'
            >
              {props.cities.data && props.cities.data.length > 0
                ? props.cities.data.map(item => {
                    return <option value={item._id}>{item.name}</option>;
                  })
                : null}
            </Field>
          </div>
          <div className='c-setting_checkbox o-col-lg-2 o-col-md-4 o-col-sm-7 u-display-flex u-flex-row u-justify-content-between u-small-margin-top'>
            <div>
              <Field name='showFields.city' component='input' type='checkbox' />
            </div>
            <label className='c-setting__lable'>فقط دوستان من ببینند</label>
          </div>
        </div>
        <div className='c-setting__from-content-drop u-flex-column-md u-flex-column-sm u-display-flex u-flex-row u-justify-content-between u-smallx-margin-top'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>منطقه</label>
          <div className=' o-col-lg-8'>
            <Field
              className='c-setting__from-content-2 o-col-lg-9 o-col-sm-12'
              name='area'
              component='input'
              placeholder='منظقه'
            ></Field>
          </div>
          <div className='c-setting_checkbox o-col-lg-2 o-col-md-4 o-col-sm-7 u-display-flex u-flex-row u-justify-content-between u-small-margin-top'>
            <div>
              <Field name='showFields.region' component='input' type='checkbox' />
            </div>
            <label className='c-setting__lable'>فقط دوستان من ببینند</label>
          </div>
        </div>
        <div className='c-setting__from-content-drop u-flex-column-md u-flex-column-sm u-display-flex u-flex-row u-justify-content-between u-smallx-margin-top'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'>مدرسه</label>
          <div className=' o-col-lg-8'>
            <Field
              className='c-setting__from-content-2 o-col-lg-9 o-col-sm-12'
              name='schoolName'
              component='input'
              placeholder='مدرسه'
            />
          </div>

          <div className='c-setting_checkbox o-col-lg-2 o-col-md-4 o-col-sm-7 u-display-flex u-flex-row u-justify-content-between u-small-margin-top'>
            <div>
              <Field name='showFields.schoolName' component='input' type='checkbox' />
            </div>
            <label className='c-setting__lable'>فقط دوستان من ببینند</label>
          </div>
        </div>
        <div className='c-setting__from-content-drop u-flex-column-md u-flex-column-sm u-display-flex u-flex-row u-justify-content-between u-smallx-margin-top'>
          <label className='u-smallx-margin-top o-col-lg-2 o-col-md-12 o-col-sm-12'> کلاس</label>
          <div className=' o-col-lg-8'>
            <Field
              className='c-setting__from-content-2 o-col-lg-9 o-col-sm-12'
              name='classLevel'
              component='input'
              placeholder='کلاس'
            ></Field>
          </div>
          <div className='c-setting_checkbox o-col-lg-2 o-col-md-4 o-col-sm-7 u-display-flex u-flex-row u-justify-content-between u-small-margin-top'>
            <div>
              <Field name='showFields.schoolLevel' component='input' type='checkbox' />
            </div>
            <label className='c-setting__lable'>فقط دوستان من ببینند</label>
          </div>
        </div>
      </form>
    </div>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
SettingForm = reduxForm({
  form: 'settingsForm' // a unique identifier for this form
})(SettingForm);

// You have to connect() to any reducers that you wish to connect to yourself
SettingForm = connect(
  state => ({
    initialValues: state.app.partials.currentUser // pull initial values from account reducer
  })
  // bind account loading action creator
)(SettingForm);

export default SettingForm;
// export default reduxForm ({
//     form: 'settingForm', // <------ same form name
//     destroyOnUnmount: false,// <------ preserve form data
//     enableReinitialize: true,
// })(SettingForm);
