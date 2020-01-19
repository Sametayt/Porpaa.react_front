import './actions';
export const initialState = {
  adminTags: [],
  adminTagById: [],
  adminTag: [],
  requestOtherAll: [],
  requestOtherById: [],
  requestOther: [],
  adminReports: [],
  adminReportById: [],
  adminReport: [],
  editRequest: [],
  loader: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    //TAG
    case 'FETCH_TAGS_ADMIN': {
      if (action.data) {
        return {
          ...state,
          adminTags: action.data
        };
      }
      break;
    }

    case 'FETCH_TAG_BY_ID_ADMIN': {
      if (action.data) {
        return {
          ...state,
          adminTagById: action.data
        };
      }
      break;
    }

    case 'FETCH_TAG_ADMIN': {
      if (action.data) {
        return {
          ...state,
          adminTag: action.data
        };
      }
      break;
    }

    //REPORT
    case 'FETCH_REPORTS_ADMIN': {
      if (action.data) {
        return {
          ...state,
          adminReports: action.data
        };
      }
      break;
    }

    case 'FETCH_REPORT_BY_ID_ADMIN': {
      if (action.data) {
        return {
          ...state,
          adminReportById: action.data
        };
      }
      break;
    }

    case 'FETCH_REPORT_ADMIN': {
      if (action.data) {
        return {
          ...state,
          adminReport: action.data
        };
      }
      break;
    }

    // EDIT REQUEST
    case 'FETCH_EDIT_REQUEST_ADMIN': {
      if (action.data) {
        return {
          ...state,
          editRequest: action.data
        };
      }
      break;
    }

    // REQUEST OTHER ???
    case 'FETCH_REQUEST_OTHER': {
      if (action.data) {
        return {
          ...state,
          requestOtherAll: action.data
        };
      }
      break;
    }

    case 'FETCH_REQUEST_OTHER_BY_ID': {
      if (action.data) {
        return {
          ...state,
          requestOtherById: action.data
        };
      }
      break;
    }

    case 'FETCH_REQUEST_OTHER': {
      if (action.data) {
        return {
          ...state,
          requestOther: action.data
        };
      }
      break;
    }

    default:
      return state;
  }
}
