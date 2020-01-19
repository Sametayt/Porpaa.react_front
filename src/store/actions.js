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
// else{

//    toast.error('توکن منقضی شده', {
//       position: toast.POSITION.TOP_CENTER,
//   });
//   window.location.replace('/login');
// }

//// PATIALS ( HEADER & FOOTER ) FETCH DATA REQUESTS
function getAllSubjects() {
  return axios({
    method: 'get',
    url: '/subject/all',
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
    headers: { Authorization: xtoken }
    //auth:{'Token': xtoken }
    // data:{
    //     username : username,
    //     password : password
    // }
    // params: {
    //   key: key,
    //   email: username,
    //   pass: password
    // }
  });
}

function getSingleQuestion(id, dispatch) {
  const url = '/question/' + id;
  
  dispatch({ type: 'SHOW_LOADER', data: true });
  return axios({
    method: 'get',
    url: url,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
    headers: { Authorization: xtoken }
  }).then(function(response) {
    dispatch({ type: 'SHOW_LOADER', data: false });
    return dispatch({ type: 'FETCH_QUESTION', data: response.data });
  });
}


function getChallenges() {
  return axios({
    method: 'get',
    url: '/challenge/all',
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
    headers: { Authorization: xtoken }
  });
}

function getAllFriends() {
  return axios({
    method: 'get',
    url: '/user/friend/getFriend',
    headers: { Authorization: xtoken },
    responseType: 'json',
  })
}

function getAllTags() {
  
  return axios({
    method: 'get',
    url: '/tags/all',
    headers: { Authorization: xtoken },
    responseType: 'json'
  })
}

function fetchUserXP() {
  
  return axios({
    method: 'get',
    url: '/user/points/xp',
    headers: { Authorization: xtoken },
    responseType: 'json'
  })
}

function fetchTotalAp() {
  
  return axios({
    method: 'get',
    url: '/user/points/xp/total',
    headers: { Authorization: xtoken },
    responseType: 'json'
  })
}

function refetchMyPlayList(dispatch) {
  const url = `playlist/my-playlist`;
  return axios({
    method: 'get',
    url: url,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
    headers: { Authorization: xtoken },
  })
  .then(function(response) {
    if (!response.data.isSuccessful) {
      toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      console.log('FETCH_MY-PLAYLIST', response.data);
      return dispatch({ type: 'FETCH_MY_PLAYLIST', data: response.data });
    }
  })
}
export function fetchChartPoint() {
  
  const url = '/user/points/ap/chart';
  return axios({
    method: 'get',
    url: url,
    headers: { 'Content-Type': 'application/json' },
    responseType: 'json',
    headers: { Authorization: xtoken },
    params: { dayCount: 7 }
  })
}

function fetchTotalXP() {
  
  return axios({
    method: 'get',
    url: '/user/points/ap/total',
    headers: { Authorization: xtoken },
    responseType: 'json'
  })
}

function fetchUserAp() {
  
  return axios({
    method: 'get',
    url: '/user/points/ap',
    headers: { Authorization: xtoken },
    responseType: 'json'
  })
}

function getCurrentUser() {
  
  return axios({
    method: 'get',
    url: '/user/get/info',
    headers: { Authorization: xtoken },
    responseType: 'json'
  })
}

/**
* Login and Register
*/
export function login(formData) {
  const { username, password } = formData;
  
  return dispatch =>
  new Promise(async(resolve, reject) => {
    dispatch({ type: 'SHOW_LOADER', data: true });
    axios({
      method: 'post',
      url: '/login',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      
      //auth:{'username': email,'password': password}
      data: {
        username: username,
        password: password
      }
      // params: {
      //   key: key,
      //   email: username,
      //   pass: password
      // }
    })
    .then(function(response) {
      
      if (!response.data) {
        toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
          position: toast.POSITION.TOP_CENTER
        });
        dispatch({ type: 'SHOW_LOADER', data: false });
      } else {
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.replace('/questions');
        dispatch({ type: 'SHOW_LOADER', data: false });
        return dispatch({ type: 'USER_LOGIN', data: response.data });
      }
    })
    .catch(function(error) {
      dispatch({ type: 'SHOW_LOADER', data: false });
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      });
    });
  }).catch(err => {
    throw err.message;
  });
}

export function logOut() {
  return dispatch => {
    window.location.replace('/');
    localStorage.setItem('user', null);
    localStorage.setItem('bookmarks', null);
    return dispatch({ type: 'USER_LOGOUT' })
  }
}

export function register(data) {
  const {
    username,
    password,
    password2,
    firstName,
    lastName,
    phone,
    gender,
    state,
    city,
    schoolLevel,
    educationField
  } = data;
  return dispatch =>
  new Promise(async(resolve, reject) => {
    ///validation rules
    
    if (!username || username == '') {
      toast.error('لطفا نام کاربری را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!password || password == '') {
      toast.error('لطفا رمز عبور را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!password2 || password2 !== password) {
      toast.error('مقدار رمز عبور با تکرار رمز عبور یکی نیست', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!firstName || firstName == '') {
      toast.error('لطفا نام را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!lastName || lastName == '') {
      toast.error('لطفا نام خانوادگی را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!phone || phone == '') {
      toast.error('لطفا تلفن را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!gender || gender == '') {
      toast.error('لطفا جنسیت را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!state || state == '') {
      toast.error('لطفا استان را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!city || city == '') {
      toast.error('لطفا شهر را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!schoolLevel || schoolLevel == '') {
      toast.error('لطفا مقطع تحصیلی را در فرم ثبت نام وارد کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    if (!educationField || educationField == '') {
      toast.error('لطفا رشته تحصیلی را در فرم ثبت نام تکمیل کنید', {
        position: toast.POSITION.TOP_CENTER
      });
      return reject(false);
    }
    dispatch({ type: 'SHOW_LOADER', data: true });
    axios({
      method: 'post',
      url: '/register',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      data: data
    })
    .then(function(response) {
      
      dispatch({ type: 'SHOW_LOADER', data: false });
      if (!response.data.isSuccessful) {
        console.log(response.data);
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_CENTER
        });
        
        dispatch({ type: 'USER_REGISTER', data: response.data });
        return reject();
      } else {
        
        
        console.log("REGISTER DATA", response.data);
        toast.success('ثبت نام با موفقیت انجام شد', {
          position: toast.POSITION.TOP_CENTER
        });
        
        
        localStorage.setItem('user', JSON.stringify(response.data));
        dispatch({ type: 'USER_REGISTER', data: response.data });
        return resolve(response.data)
      }
    })
    .catch(function(error) {
      dispatch({ type: 'SHOW_LOADER', data: false });
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      });
      return reject();
    });
  }).catch(err => {});
}
export function verifyNumber(code, phone) {
  console.log('xtoken', xtoken)
  
  return dispatch =>
  new Promise(async(resolve, reject) => {
    
    dispatch({ type: 'SHOW_LOADER', data: true });
    axios({
      method: 'post',
      url: '/verify',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      
      //auth:{'username': email,'password': password}
      data: {
        activationCode: code,
        phone: phone
      }
      // params: {
      //   key: key,
      //   email: username,
      //   pass: password
      // }
    })
    .then(function(response) {
      dispatch({ type: 'SHOW_LOADER', data: false });
      
      if (!response.data.isSuccessful) {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        resolve(response.data);
        return dispatch({ type: 'VERIFY_USER', data: response.data });
      }
    })
    .catch(function(error) {
      dispatch({ type: 'SHOW_LOADER', data: false });
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      });
    });
  }).catch(err => {
    throw err.message;
  });
  
}


// STATE ACTIONS

export function fetchStates() {
  return dispatch =>
  new Promise(async(resolve, reject) => {
    axios({
      method: 'get',
      url: '/state/all',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json'
      
      //auth:{'username': email,'password': password}
      //data:formData
      // params: {
      //   key: key,
      //   email: username,
      //   pass: password
      // }
    })
    .then(function(response) {
      if (!response.data) {
        toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        return dispatch({ type: 'FETCH_STATES', data: response.data });
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

export function fetchStateByID(id) {
  
  const url = `/state/${id}`;
  return dispatch =>
  new Promise(async(resolve, reject) => {
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
        console.log('STATE_FETCH_BY_ID', response.data);
        return dispatch({ type: 'FETCH_STATE_BY_ID', data: response.data });
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

export function fetchState(name) {
  
  const url = `/state/filter`;
  return dispatch =>
  new Promise(async(resolve, reject) => {
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
        console.log('STATE_FETCH', response.data);
        return dispatch({ type: 'FETCH_STATE', data: response.data });
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

// CITY ACTIONS

export function fetchCities(data) {
  debugger
  return dispatch =>
  new Promise(async(resolve, reject) => {
    axios({
      method: 'get',
      url: '/state/filter',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json',
      
      //auth:{'username': email,'password': password}
      //data:formData
      params: {
        name: data
      }
      // params: {
      //   key: key,
      //   email: username,
      //   pass: password
      // }
    })
    .then(function(response) {
      if (!response.data) {
        toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        return dispatch({ type: 'FETCH_CITIES', data: response.data });
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

export function fetchCityByID(id) {
  const url = `/city/${id}`;
  return dispatch =>
  new Promise(async(resolve, reject) => {
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
        console.log('CITY_FETCH_BY_ID', response.data);
        return dispatch({ type: 'FETCH_CITY_BY_ID', data: response.data });
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

export function fetchCity(name, state) {
  debugger
  const url = `/city/filter`;
  return dispatch =>
  new Promise(async(resolve, reject) => {
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
        console.log('CITY_FETCH', response.data);
        return dispatch({ type: 'FETCH_CITY', data: response.data });
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

/**FETCH PARTIALS VIEW */
export function getPartials() {
  return dispatch =>
  new Promise(async(resolve, reject) => {
    
    axios.all([getAllSubjects(), getChallenges(), getAllFriends(), getAllTags(), fetchUserAp(), fetchUserXP(), getCurrentUser(), fetchTotalAp(), fetchTotalXP(), fetchChartPoint()]).then(
      axios.spread(function(subjects, challenge, friends, tags, AP, XP, currentUser, totalAP, totalXP, APChart) {
        let partials = {};
        if (subjects.data) {
          partials.subjects = subjects.data.data;
        }
        
        if (challenge.data) {
          partials.challenge = challenge.data.data;
        }
        
        if (friends.data) {
          partials.friends = friends.data.data;
        }
        
        if (tags.data) {
          partials.tags = tags.data.data;
        }
        
        if (XP.data) {
          partials.XP = XP.data.data;
        }
        
        if (AP.data) {
          partials.AP = AP.data.data;
        }
        
        if (totalXP.data) {
          partials.totalXP = totalXP.data.data;
        }
        
        if (totalAP.data) {
          partials.totalAP = totalAP.data.data;
        }
        
        if (currentUser.data) {
          partials.currentUser = currentUser.data.data;
        }
        
        if (currentUser.data && currentUser.data.data.role) {
          partials.role = currentUser.data.data.role;
        } else {
          partials.role = 'admin';
        }
        
        if (APChart.data) {
          
          partials.APChart = APChart.data.data;
        }
        return dispatch({ type: 'GET_PARTIALS', data: partials });
      })
      );
    }).catch(async err => {
      ////console.log(err)
      throw err.message;
    });
  }
  
  /**FETCH QUESTIONS VIEW */
  
  export function fetchQuestions(page = 1, limit = 10, filterParams = {}) {
    
    const url = '/question/filter/' + page + '/' + limit;
    console.log("FILTERS", filterParams)
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        params: filterParams,
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
          dispatch({ type: 'SHOW_LOADER', data: false });
          console.log('QUESTIONS_FETCH', response.data);
          return dispatch({ type: 'FETCH_QUESTIONS', data: response.data });
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
  
  export function fetchQuestion(id) {
    
    const url = '/question/' + id;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          dispatch({ type: 'SHOW_LOADER', data: false });
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('QUESTION_FETCH', response.data);
          dispatch({ type: 'SHOW_LOADER', data: false });
          return dispatch({ type: 'FETCH_QUESTION', data: response.data });
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
  
  
  export function requestEdit(id, text) {
    
    const url = '/request-edit/save';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        data: {
          
          question: id,
          text: text
          
        },
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          dispatch({ type: 'SHOW_LOADER', data: false });
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('درخواست با موفقیت ارسال شد', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
          
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
  
  export function fetchAnswers(page = 1, limit = 10, filterParams = {}) {
    const url = '/answer/filter/' + page + '/' + limit;
    console.log("FILTERS", filterParams)
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'get',
        url: url,
        params: filterParams,
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
          dispatch({ type: 'SHOW_LOADER', data: false });
          console.log('ANSWERS_FETCH', response.data);
          return dispatch({ type: 'FETCH_ANSWERS', data: response.data });
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
  
  
  export function answerStatus(id, status) {
    const url = '/answer/status';
    debugger
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          //return dispatch({ type: 'FETCH_ANSWERS', data: response.data });
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
  
  export function likeQuestion(id) {
    const qId = id;
    
    const url = '/question/like/' + id;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          
          if (response.data.like) {
            
            toast.success('با موفقیت انجام شد', {
              position: toast.POSITION.TOP_CENTER
            });
            
            getSingleQuestion(qId, dispatch);
            dispatch({ type: 'SHOW_LOADER', data: false });
          } else {
            
            toast.warn('قبلا انجام شده است', {
              position: toast.POSITION.TOP_CENTER
            });
            getSingleQuestion(qId, dispatch);
            dispatch({ type: 'SHOW_LOADER', data: false });
          }
          
          console.log('LIKE_FETCH', response.data);
          //return dispatch({ type: 'FETCH_QUESTION', data: response.data });
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
  
  
  export function likeAnswer(id, questionId) {
    const qId = questionId;
    
    const url = '/answer/like/' + id;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        } else {
          
          if (response.data.like) {
            toast.success('با موفقیت انجام شد', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
            getSingleQuestion(qId, dispatch);
            
          } else {
            toast.warn('قبلا انجام شده است', {
              position: toast.POSITION.TOP_CENTER
            });
            dispatch({ type: 'SHOW_LOADER', data: false });
            getSingleQuestion(qId, dispatch);
          }
          dispatch({ type: 'SHOW_LOADER', data: false });
          console.log('LIKE_FETCH', response.data);
          //return dispatch({ type: 'FETCH_QUESTION', data: response.data });
        }
      })
      .catch(function(error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER
        });
        dispatch({ type: 'SHOW_LOADER', data: false });
      });
    }).catch(err => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      throw err.message;
    });
  }
  
  export function addQuestions(formData) {
    const { title, description, subject, user, difficulty, tags } = formData;
    
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'post',
        url: '/question/save',
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        data: {
          title: title,
          description: description,
          subject: subject,
          user: user,
          difficalty: difficulty,
          tags: tags
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('سوال با موفقیت ثبت شد', {
            position: toast.POSITION.TOP_CENTER
          });
          //return dispatch({ type: 'ADD', data: response.data });
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
  
  
  export function addReport(formData, type) {
    
    const url = "/report/" + type + "/save";
    return dispatch =>
    
    new Promise(async(resolve, reject) => {
      
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        data: formData
      })
      .then(function(response) {
        
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        } else {
          toast.success('گزارش با موفقیت ثبت شد', {
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
  
  // ANSWER_ACTIONS
  
  export function addAnswer(question, description, user) {
    return dispatch =>
    new Promise(async(resolve, reject) => {
      
      const qId = question;
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: '/answer/save',
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        data: {
          question: question,
          description: description,
          user: user
        }
      })
      .then(function(response) {
        
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        } else {
          toast.success('پاسخ شما با موفقیت ثبت شد', {
            position: toast.POSITION.TOP_CENTER
          });
          getSingleQuestion(qId, dispatch);
          dispatch({ type: 'SHOW_LOADER', data: false });
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
  
  // TAGS_ACTIONS
  
  export function fetchTags() {
    
    const url = '/tags/all';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('TAGS_FETCH', response.data);
          return dispatch({ type: 'FETCH_TAGS', data: response.data });
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
  
  export function fetchTagByID(id) {
    
    const url = `/tags/${id}`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('TAG_FETCH_BY_ID', response.data);
          return dispatch({ type: 'FETCH_TAG_BY_ID', data: response.data });
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
  
  export function fetchTag(name) {
    
    const url = `/tags/filter`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('TAG_FETCH', response.data);
          return dispatch({ type: 'FETCH_TAG', data: response.data });
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
  
  // CHALLENGE ACTIONS
  
  export function fetchChallenges() {
    
    const url = '/challenge/all';
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('CHALLENGES_FETCH', response.data);
          return dispatch({ type: 'FETCH_CHALLENGES', data: response.data });
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
  
  export function fetchActiveChallenges() {
    
    const url = 'challenge/get/my-active-challenges';
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('ACTIVE_CHALLENGES_FETCH', response.data);
          return dispatch({ type: 'FETCH_ACTIVE_CHALLENGES', data: response.data });
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
  
  export function fetchChallengeByID(id) {
    
    const url = `/challenge/${id}`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('CHALLENGE_FETCH_BY_ID', response.data);
          return dispatch({ type: 'FETCH_CHALLENGE_BY_ID', data: response.data });
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
  
  export function fetchChallenge(title) {
    
    const url = `/challenge/filter`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        params: {
          title: title
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('CHALLENGE_FETCH', response.data);
          return dispatch({ type: 'FETCH_CHALLENGE', data: response.data });
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
  
  /////GET USER DATA 
  export function fetchMyChallenges() {
    
    const url = '/challenge/get/my-challenges';
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          
          console.log('FETCH_MY_CHALLENGES', response.data);
          return dispatch({ type: 'FETCH_MY_CHALLENGES', data: response.data });
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
  
  export function fetchChartsPoint() {
    
    const url = '/user/points/ap/chart';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        params: {
          dayCount: 7
        }
      })
      .then(function(response) {
        
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          
          console.log('FETCH_AP_CHART', response.data);
          return dispatch({ type: 'FETCH_AP_CHART', data: response.data });
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
  
  
  export function fetchAPUsers(dayCount) {
    
    const url = '/user/points/xp/total/users';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        params: {
          dayCount: dayCount
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('FETCH_ALL_AP', response.data);
          return dispatch({ type: 'FETCH_ALL_AP', data: response.data });
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
  
  // SUBJECT ACTIONS
  
  export function fetchSubject(name) {
    
    const url = `/subject/filter`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('SUBJECT_FETCH', response.data);
          return dispatch({ type: 'FETCH_SUBJECT', data: response.data });
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
  
  // COMMENT ACTIONS
  
  export function addComment(text, type, id, qId) {
    
    let data = {};
    if (type == 'answer') {
      
      data.answer = id;
      
    } else {
      
      data.question = id;
    }
    data.text = text;
    
    return dispatch =>
    
    
    new Promise(async(resolve, reject) => {
      
      dispatch({ type: 'SHOW_LOADER', data: true });
      
      axios({
        method: 'post',
        url: `/comment/${type}/save`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: data
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        } else {
          toast.success('نظر شما با موفقیت ثبت شد', {
            position: toast.POSITION.TOP_CENTER
          });
          getSingleQuestion(qId, dispatch);
          //return dispatch({ type: 'ADD', data: response.data });
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
  
  export function fetchComments() {
    
    const url = '/comment/all';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('COMMENTS_FETCH', response.data);
          return dispatch({ type: 'FETCH_COMMENTS', data: response.data });
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
  
  export function fetchCommentByID(id) {
    
    const url = `/comment/${id}`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('COMMENT_FETCH_BY_ID', response.data);
          return dispatch({ type: 'FETCH_COMMENT_BY_ID', data: response.data });
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
  
  export function putComment() {
    
    const url = '/comment/update';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'put',
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
          console.log('COMMENT_PUT', response.data);
          return dispatch({ type: 'PUT_COMMENT', data: response.data });
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
  
  export function fetchComment(name, state) {
    
    const url = `/comment/filter`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('COMMENT_FETCH', response.data);
          return dispatch({ type: 'FETCH_COMMENT', data: response.data });
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
  
  // USER ACTIONS
  
  export function addFriend(userId) {
    return dispatch =>
    new Promise(async(resolve, reject) => {
      
      axios({
        method: 'post',
        url: `/user/setFriend`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          userId: userId
        }
      })
      .then(function(response) {
        
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        }
        if (response.data.friend) {
          toast.success('قبلا به لیست دوستان اضافه شده است', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('دوست شما با موفقیت ثبت شد', {
            position: toast.POSITION.TOP_CENTER
          });
          //return dispatch({ type: 'ADD', data: response.data });
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
  
  
  export function getFriend(userId) {
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: `/user/getFriend`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          userId: userId
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('دوست شما با موفقیت ثبت شد', {
            position: toast.POSITION.TOP_CENTER
          });
          //return dispatch({ type: 'ADD', data: response.data });
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
  
  export function searchUser(text) {
    const url = `/user/find/search`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
        params: {
          text: text
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('کاربر مورد نظر یافت نشد', {
            position: toast.POSITION.TOP_CENTER
          });
          return reject()
        } else {
          console.log('USER_SEARCH', response.data);
          dispatch({ type: 'USER_SEARCH', data: response.data });
          return resolve(response.data)
        }
      })
      .catch(function(error) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER
        });
        return reject()
      });
    }).catch(err => {
      throw err.message;
    });
  }
  
  // EDUCATION FIELD ACTIONS
  export function fetchEducationFields() {
    
    const url = '/education-field/all';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('EDUCATION-FIELDS_FETCH', response.data);
          return dispatch({ type: 'FETCH_EDUCATION-FIELDS', data: response.data });
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
  
  // SCHOOL LEVEL ACTIONS
  export function fetchSchoolLevels() {
    
    const url = '/school-level/all';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('SCHOOL-LEVELS_FETCH', response.data);
          return dispatch({ type: 'FETCH_SCHOOL-LEVELS', data: response.data });
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
  
  // BOOKMARK ACTIONS
  export function fetchBookmarks() {
    
    const url = '/bookmark/my-bookmark';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('BOOKMARKS_FETCH', response.data);
          return dispatch({ type: 'FETCH_BOOKMARKS', data: response.data });
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
  
  export function addBookmark(questionId) {
    debugger
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'post',
        url: `/bookmark/save`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data : {
          question : questionId
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          localStorage.setItem('bookmarks', JSON.stringify(response.data));
          toast.success('بوکمارک با موفقیت ثبت شد', {
            position: toast.POSITION.TOP_CENTER
          });
          return dispatch({ type: 'ADD_BOOKMARK', data: response.data });
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

  export function deleteBookmark(questionId) {
    const url = '/bookmark/delete';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'delete',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        params:{
          question:questionId
        }
      })
      .then(function(response) {
        debugger
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } 
        else {
          toast.success('بوکمارک با موفقیت حذف شد', {
            position: toast.POSITION.TOP_CENTER
          });
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
  
  // NOTIFICATION ACTIONS
  export function fetchNotifications(type, seen) {
    
    const url = '/notification/filter';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        params: {
          type: type,
          seen: seen
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('NOTIFICATIONS_FETCH', response.data);
          // alert(response.data.data[0].message)
          return dispatch({ type: 'FETCH_NOTIFICATIONS', data: response.data });
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
  
  // LEVEL ACTIONS
  export function fetchLevels() {
    const url = '/level/all';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json'
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('LEVELS_FETCH', response.data);
          return dispatch({ type: 'FETCH_LEVELS', data: response.data });
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
  
  export function fetchLevelByID(id) {
    const url = `/level/${id}`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('LEVEL_FETCH_BY_ID', response.data);
          return dispatch({ type: 'FETCH_LEVEL_BY_ID', data: response.data });
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
  
  export function fetchLevel(name) {
    
    const url = `/level/filter`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('LEVEL_FETCH', response.data);
          return dispatch({ type: 'FETCH_LEVEL', data: response.data });
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
  
  export function addLevel(type, name, icon, points = 10, order = 1) {
    const url = `/level/${type}/save`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        data: {
          name: name,
          icon: icon,
          points: points,
          order: order
        },
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          dispatch({ type: 'SHOW_LOADER', data: false });
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('درخواست با موفقیت ارسال شد', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
          
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
  
  export function challengeStart(id) {
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'post',
        url: `/challenge/start`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        data: {
          _id: id
        },
        responseType: 'json',
      })
      .then(function(response) {
        
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          
          toast.success('چالش شما با موفقیت ثبت شد', {
            position: toast.POSITION.TOP_CENTER
          });
          return dispatch({ type: 'CHALLENGE_START', data: response.data });
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
  
  // Password Actions
  export function RecoverPassword(phone) {
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'post',
        url: `/forgetPassword`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          phone: phone
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('شماره موبایل شما تایید شد', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'ACTIVATION_CODE', data: response.data })
          return resolve(response.data)
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
  
  export function passwordReset(data) {
    const { phone, password1, password2 } = data
    return dispatch =>
    new Promise(async(resolve, reject) => {
      if (!phone || phone == '') {
        toast.error('لطفا نام کاربری را در فرم ثبت نام وارد کنید', {
          position: toast.POSITION.TOP_CENTER
        });
        return reject(false);
      }
      if (!password1 || password1 == '') {
        toast.error('لطفا رمز عبور را در فرم ثبت نام وارد کنید', {
          position: toast.POSITION.TOP_CENTER
        });
        return reject(false);
      }
      if (!password2 || password2 !== password1) {
        toast.error('مقدار رمز عبور با تکرار رمز عبور یکی نیست', {
          position: toast.POSITION.TOP_CENTER
        });
        return reject(false);
      }
      axios({
        method: 'post',
        url: `/resetPassword`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          phone: phone,
          password: password2,
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('رمز عبور شما با موفقیت تغییر کرد', {
            position: toast.POSITION.TOP_CENTER
          });
          window.location.replace('/login');
          // dispatch({ type: 'ACTIVATION_CODE', data: response.data })
          return resolve(response.data)
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
  
  export function resendCode(phone) {
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'post',
        url: `/resend`,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          phone: phone
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('کد دوباره اومد', {
            position: toast.POSITION.TOP_CENTER
          });
          // dispatch({ type: 'ACTIVATION_CODE', data: response.data })
          return resolve(response.data)
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
  
  // MISSION CARDS
  export function fetchMissionCards() {
    
    const url = `/missionCard/all`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('FETCH_MISSION-CARDS', response.data);
          return dispatch({ type: 'FETCH_MISSION-CARDS', data: response.data });
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
  
  export function fetchMissionCardByID(id) {
    const url = `/missionCard/${id}`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('FETCH_MISSION-CARD_BY_ID', response.data);
          return dispatch({ type: 'FETCH_MISSION-CARD_BY_ID', data: response.data });
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
  
  export function fetchMissionCard(name) {
    
    const url = `/missionCard/filter`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
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
          console.log('FETCH_MISSION-CARD', response.data);
          return dispatch({ type: 'FETCH_MISSION-CARD', data: response.data });
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
  
  // REQUEST OTHER
  export function sendRequestOther(users, question) {
    const url = '/request-other/save';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        headers: { Authorization: xtoken },
        responseType: 'json',
        data: {
          users: users,
          question: question
        }
      })
      .then(response => {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
        } else {
          toast.success('سوال با موفقیت فرستاده شد', {
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
  
  // PLAY LIST
  export function fetchMyPlayList() {
    
    const url = `playlist/my-playlist`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken },
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          console.log('FETCH_MY-PLAYLIST', response.data);
          return dispatch({ type: 'FETCH_MY_PLAYLIST', data: response.data });
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
  
  export function addToPlayList(title) {
    const url = `/playlist/save`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        data: {
          title: title
        },
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          dispatch({ type: 'SHOW_LOADER', data: false });
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('درخواست با موفقیت ارسال شد', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
          
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
  
  export function addQuestionToPlayList(question, _id) {
    const url = `/playlist/question/save`;
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'post',
        url: url,
        data: {
          question: question,
          _id: _id
        },
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          dispatch({ type: 'SHOW_LOADER', data: false });
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('درخواست با موفقیت ارسال شد', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'SHOW_LOADER', data: false });
          
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
  
  
  export function removePlayList(id) {
    const url = `/playlist/` + id;
    return dispatch => new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'delete',
        url: url,
        responseType: 'json',
        headers: {
          Authorization: xtoken
        }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          dispatch({ type: 'SHOW_LOADER', data: false });
          
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', { position: toast.POSITION.TOP_CENTER });
        } else {
          toast.success('پلی لیست با موفقیت حذف شد', { position: toast.POSITION.TOP_CENTER });
          refetchMyPlayList(dispatch);
          dispatch({ type: 'SHOW_LOADER', data: false });
          
        }
      })
      .catch(function(error) {
        toast.error(error.message, { position: toast.POSITION.TOP_CENTER });
      });
    }).catch(err => {
      throw err.message;
    });
  }
  
  export function updateUser(data) {
  debugger
    const url = '/user/update';
    return dispatch =>
    new Promise(async(resolve, reject) => {
      dispatch({ type: 'SHOW_LOADER', data: true });
      axios({
        method: 'put',
        url: url,
        data: data,
        headers: { 'Content-Type': 'application/json' },
        responseType: 'json',
        headers: { Authorization: xtoken }
      })
      .then(function(response) {
        if (!response.data.isSuccessful) {
          dispatch({ type: 'SHOW_LOADER', data: false });
          toast.error('مشکلی پیش آمده! دوباره امتحان کنید', {
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.success('بروزرسانی با موفقیت ارسال شد', {
            position: toast.POSITION.TOP_CENTER
          });
          dispatch({ type: 'UPDATE_USER', data: response.data.data });
          
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