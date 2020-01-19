import axios from 'axios';
import { toast } from 'react-toastify';

/*** Set base url ****/
axios.defaults.baseURL = 'http://185.227.139.39:9095/api';
const headerParams = {
  'api-key': 'ee556dca-ec07-46cb-bb55-33a16a356406',
  'api-secret-key': '98e138187f7ad22a269613264dfa3fb73ad1275133390ba9'
};
let token = null;
let Auth = localStorage.getItem('user');
let xtoken = null;
if (Auth !== 'null') {
  console.log(JSON.parse(Auth));
  token = JSON.parse(Auth);
  // xtoken = 'Bearer ' + token.access_token;
  xtoken = token.access_token;
}

// TAG
// GET / TAG
export function fetchTags_admin() {
  const url = 'tags/all';
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
        .then(response => {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            console.log('FETCH_TAGS_ADMIN', response.data);
            return dispatch({ type: 'FETCH_TAGS_ADMIN', data: response.data });
          }
        })
        .catch(error => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

export function fetchTagById_admin(id) {
  const url = `/tags/${id}`;
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
        .then(response => {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            console.log('FETCH_TAG_BY_ID_ADMIN', response.data);
            return dispatch({ type: 'FETCH_TAG_BY_ID_ADMIN', data: response.data });
          }
        })
        .catch(error => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

export function fetchTag_admin(name) {
  const url = `/tags/filter`;
  return dispatch =>
    new Promise(async (resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        params: {
          name: name
        }
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('FETCH_TAG_ADMIN', response.data);
            return dispatch({ type: 'FETCH_TAG_ADMIN', data: response.data });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
        });
    }).catch(err => {
      throw err.message;
    });
}

// POST / TAG
export function addTag_admin(name) {
  const url = '/tags/save';
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          name: name
        }
      })
        .then(response => {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            toast.success('با موفقیت ثبت شد', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          }
        })
        .catch(error => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

// REPORT
// GET / REPORT
export function fetchReports_admin() {
  const url = '/report/all';
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
        .then(response => {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            console.log('FETCH_REPORTS_ADMIN', response.data);
            return dispatch({ type: 'FETCH_REPORTS_ADMIN', data: response.data });
          }
        })
        .catch(error => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

export function fetchReportById_admin(id) {
  const url = `/report/${id}`;
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
        .then(response => {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            console.log('FETCH_REPORT_BY_ID_ADMIN', response.data);
            return dispatch({ type: 'FETCH_REPORT_BY_ID_ADMIN', data: response.data });
          }
        })
        .catch(error => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

export function fetchReport_admin(name, state) {
  const url = `/report/filter`;
  return dispatch =>
    new Promise(async (resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        params: {
          name: name,
          state: state
        }
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('FETCH_REPORT_ADMIN', response.data);
            return dispatch({ type: 'FETCH_REPORT_ADMIN', data: response.data });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
        });
    }).catch(err => {
      throw err.message;
    });
}

// PUT / REPORT
export function editReport_admin(deleted, created_at, updated_at, _id, name) {
  const url = '/answer/status';
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'put',
        url: url,
        data: {
          deleted: deleted,
          created_at: created_at,
          updated_at: updated_at,
          _id: _id,
          name: name
        },
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            dispatch({ type: 'SHOW_LOADER', data: false });
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('ANSWERS_FETCH', response.data);
            toast.error('تغیرر در گزارش با موفقیت ثبت شد', {
              position: toast.POSITION.TOP_CENTER
            });
            return dispatch({ type: 'SHOW_LOADER', data: false });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

// POST / DIFFICALTY !!!
export function setDifficulty_admin(question, difficalty) {
  const url = '/tags/save';
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          question: question,
          difficalty: difficalty
        }
      })
        .then(response => {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            toast.success('با موفقیت ثبت شد', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          }
        })
        .catch(error => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

// PUT / ANSWER
export function answerStatus_admin(id, status) {
  const url = '/answer/status';
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'put',
        url: url,
        data: {
          _id: id,
          status: status
        },
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            dispatch({ type: 'SHOW_LOADER', data: false });
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('ANSWERS_FETCH', response.data);
            toast.error(' تایید جواب با موفقیت ثبت شد', {
              position: toast.POSITION.TOP_CENTER
            });
            return dispatch({ type: 'SHOW_LOADER', data: false });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

// EDIT REQUEST
// GET / EDIT REQUEST
export function fetchEditRequest_admin(status, user) {
  const url = '/request-edit/filter';
  debugger
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        params: {
          status: status,
          user: user
        }
      })
        .then(response => {
          debugger
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            console.log('FETCH_EDIT_REQUEST_ADMIN', response.data);
            return dispatch({ type: 'FETCH_EDIT_REQUEST_ADMIN', data: response.data });
          }
        })
        .catch(error => {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

// PUT / EDIT REQUEST
export function editRequestStatus_admin(_id, status) {
  const url = '/request-edit/change/status';
  return dispatch =>
    new Promise(async (resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'put',
        url: url,
        data: {
          _id: _id,
          status: status
        },
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json'
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            dispatch({ type: 'SHOW_LOADER', data: false });
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('ANSWERS_FETCH', response.data);
            toast.error('تغییر با موفقیت ثبت شد', {
              position: toast.POSITION.TOP_CENTER
            });
            return dispatch({ type: 'SHOW_LOADER', data: false });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        });
    }).catch(err => {
      throw err.message;
    });
}

// REQUEST OTHER
// GET / REQUEST OTHER
export function fetchRequestOtherAll_admin() {
  const url = `/request-other/all`;
  return dispatch =>
    new Promise(async (resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('FETCH_REQUEST-OTHER', response.data);
            return dispatch({ type: 'FETCH_REQUEST-OTHER', data: response.data });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
        });
    }).catch(err => {
      throw err.message;
    });
}

export function fetchRequestOtherByID_admin(id) {
  const url = `/request-other/${id}`;
  return dispatch =>
    new Promise(async (resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('FETCH_REQUEST_OTHER_BY_ID', response.data);
            return dispatch({ type: 'FETCH_REQUEST_OTHER_BY_ID', data: response.data });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
        });
    }).catch(err => {
      throw err.message;
    });
}

export function fetchRequestOther_admin(name) {
  const url = `/request-other/filter`;
  return dispatch =>
    new Promise(async (resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        params: {
          name: name
        }
      })
        .then(function(response) {
          if (!response.data.isSuccessful) {
            toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
              position: toast.POSITION.TOP_CENTER
            });
          } else {
            console.log('FETCH_REQUEST_OTHER', response.data);
            return dispatch({ type: 'FETCH_REQUEST_OTHER', data: response.data });
          }
        })
        .catch(function(error) {
          toast.error(error.message, {
            position: toast.POSITION.TOP_CENTER
          });
        });
    }).catch(err => {
      throw err.message;
    });
}
