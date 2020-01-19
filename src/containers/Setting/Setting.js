import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, fetchEducationFields, fetchSchoolLevels, fetchStates, fetchCities } from '../../store/actions';
import SettingForm from '../../components/Setting/SettingFrom';
import SettingSidebar from '../../components/Setting/SettingSidebar';
import Loader from '../../components/Common/Loader';

class Setting extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.fetchEducationFields();
    this.props.fetchSchoolLevels();
    this.props.fetchStates();
  };

  updateUser = e => {
    this.props.updateUser(this.props.form.settingsForm.values);
    e.preventDefault();
  };

  getCity = data => {
    if (data.currentTarget.value && data.currentTarget.value != '') {
      this.props.fetchCities(data.currentTarget.value);
    }
  };

  render() {
    console.log('Settings', this.props);
    if (!this.props.app.partials.currentUser || this.props.app.loader) {
      return <Loader />;
    }
    return (
      <div className='c-setting__content o-container u-display-flex u-flex-column-sm u-flex-column-md u-flex-row u-medium-padding-vertical u-large-margin-vertical'>
        <div className='o-col-lg-3 o-col-md-12 o-col-sm-12'>
          <SettingSidebar />
        </div>
        <div className='o-col-lg-9 o-col-md-12 o-col-sm-12 u-medium-margin-top-sm  u-medium-margin-top-md'>
          <SettingForm
            updateUser={this.updateUser}
            data={this.props.app.partials.currentUser}
            states={this.props.app.states}
            educationFields={this.props.app.educationFields}
            schoolLevels={this.props.app.schoolLevels}
            getCity={this.getCity}
            cities={this.props.app.cities}
          />
        </div>
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
    updateUser: function(data) {
      dispatch(updateUser(data));
    },
    fetchEducationFields: function() {
      dispatch(fetchEducationFields());
    },
    fetchSchoolLevels: function() {
      dispatch(fetchSchoolLevels());
    },
    fetchCities: function(data) {
      dispatch(fetchCities(data));
    },
    fetchStates: function() {
      dispatch(fetchStates());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
