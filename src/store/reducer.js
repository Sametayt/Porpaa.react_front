import './actions';
export const initialState = {
  questions: [],
  question: [],
  answers: [],
  states: [],
  state: [],
  stateById: [],
  cities: [],
  city: [],
  cityById: [],
  user: [],
  register: [],
  verifyUser: [],
  subject: [],
  subjectById: [],
  partials: [],
  tags: [],
  tag: [],
  tagById: [],
  comments: [],
  comment: [],
  commentById: [],
  challenges: [],
  myChallenges: [],
  challenge: [],
  activeChallenges: [],
  challengeById: [],
  educationFields: [],
  searchedUser: [],
  schoolLevels: [],
  bookmarks: [],
  notifications: [],
  levels: [],
  level: [],
  levelById: [],
  usersAP: [],
  activationCode: null,
  test: [],
  missionCards: [],
  missionCard: [],
  missionCardById: [],
  myPlayList: [],
  loader: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.data) {
        return {
          ...state,
          loader: false,
          user: action.data
        };
      }
      break;
    }

    case 'USER_LOGOUT': {
      return {
        initialState
      };
    }

    case 'FETCH_EDUCATION-FIELDS': {
      if (action.data) {
        return {
          ...state,
          educationFields: action.data
        };
      }
      break;
    }

    case 'FETCH_SCHOOL-LEVELS': {
      if (action.data) {
        return {
          ...state,
          schoolLevels: action.data
        };
      }
      break;
    }

    case 'VERIFY_USER': {
      if (action.data) {
        return {
          ...state,
          loader: false,
          verifyUser: action.data
        };
      }
      break;
    }

    case 'FETCH_STATES': {
      if (action.data) {
        return {
          ...state,
          states: action.data
        };
      }
      break;
    }

    case 'FETCH_STATE_BY_ID': {
      if (action.data) {
        return {
          ...state,
          stateById: action.data
        };
      }
      break;
    }

    case 'FETCH_STATE': {
      if (action.data) {
        return {
          ...state,
          state: action.data
        };
      }
      break;
    }

    case 'FETCH_CITIES': {
      if (action.data) {
        return {
          ...state,
          cities: action.data
        };
      }
      break;
    }

    case 'FETCH_CITY_BY_ID': {
      if (action.data) {
        return {
          ...state,
          cityById: action.data
        };
      }
      break;
    }

    case 'FETCH_CITY': {
      if (action.data) {
        return {
          ...state,
          city: action.data
        };
      }
      break;
    }

    case 'GET_PARTIALS': {
      if (action.data) {
        return {
          ...state,
          partials: action.data
        };
      }
      break;
    }

    case 'FETCH_QUESTIONS': {
      if (action.data) {
        return {
          ...state,
          questions: action.data,
          loader: false
        };
      }
      break;
    }

    case 'FETCH_ANSWERS': {
      if (action.data) {
        return {
          ...state,
          answers: action.data,
          loader: false
        };
      }
      break;
    }

    case 'FETCH_QUESTION': {
      if (action.data) {
        return {
          ...state,
          question: action.data,
          loader: false
        };
      }
      break;
    }

    case 'FETCH_TAGS': {
      if (action.data) {
        return {
          ...state,
          tags: action.data
        };
      }
      break;
    }

    case 'FETCH_TAG_BY_ID': {
      if (action.data) {
        return {
          ...state,
          tagById: action.data
        };
      }
      break;
    }

    case 'FETCH_TAG': {
      if (action.data) {
        return {
          ...state,
          tag: action.data
        };
      }
      break;
    }

    case 'FETCH_CHALLENGES': {
      if (action.data) {
        return {
          ...state,
          challenges: action.data
        };
      }
      break;
    }

    case 'FETCH_MY_CHALLENGES': {
      if (action.data) {
        return {
          ...state,
          myChallenges: action.data
        };
      }
      break;
    }

    case 'FETCH_CHALLENGE_BY_ID': {
      if (action.data) {
        return {
          ...state,
          challengeById: action.data
        };
      }
      break;
    }

    case 'FETCH_CHALLENGE': {
      if (action.data) {
        return {
          ...state,
          challenge: action.data
        };
      }
      break;
    }

    case 'FETCH_ACTIVE_CHALLENGES': {
      if (action.data) {
        return {
          ...state,
          activeChallenges: action.data
        };
      }
      break;
    }

    case 'FETCH_COMMENTS': {
      if (action.data) {
        return {
          ...state,
          comments: action.data
        };
      }
      break;
    }

    case 'FETCH_COMMENT_BY_ID': {
      if (action.data) {
        return {
          ...state,
          commentById: action.data
        };
      }
      break;
    }

    case 'FETCH_COMMENT': {
      if (action.data) {
        return {
          ...state,
          comment: action.data
        };
      }
      break;
    }

    case 'FETCH_SUBJECT_BY_ID': {
      if (action.data) {
        return {
          ...state,
          subjectById: action.data
        };
      }
      break;
    }

    case 'FETCH_SUBJECT': {
      if (action.data) {
        return {
          ...state,
          subject: action.data
        };
      }
      break;
    }

    case 'USER_SEARCH': {
      if (action.data) {
        return {
          ...state,
          searchedUser: action.data
        };
      }
      break;
    }

    case 'SHOW_LOADER': {
      if (true) {
        return {
          ...state,
          loader: action.data
        };
      }
      break;
    }

    case 'FETCH_BOOKMARKS': {
      if (action.data) {
        return {
          ...state,
          bookmarks: action.data
        };
      }
      break;
    }

    case 'ADD_BOOKMARK': {
      if (action.data) {
        return {
          ...state,
          bookmarks: action.data
        };
      }
      break;
    }

    case 'FETCH_NOTIFICATIONS': {
      if (action.data) {
        return {
          ...state,
          notifications: action.data
        };
      }
      break;
    }

    case 'FETCH_LEVELS': {
      if (action.data) {
        return {
          ...state,
          levels: action.data
        };
      }
      break;
    }

    case 'FETCH_LEVEL_BY_ID': {
      if (action.data) {
        return {
          ...state,
          levelById: action.data
        };
      }
      break;
    }

    case 'FETCH_LEVEL': {
      if (action.data) {
        return {
          ...state,
          level: action.data
        };
      }
      break;
    }

    case 'FETCH_ALL_AP': {
      if (action.data) {
        return {
          ...state,
          usersAP: action.data
        };
      }
      break;
    }

    case 'ACTIVATION_CODE': {
      if (action.data) {
        return {
          ...state,
          activationCode: action.data
        };
      }
      break;
    }

    case 'FETCH_MISSION-CARDS': {
      if (action.data) {
        return {
          ...state,
          missionCards: action.data
        };
      }
      break;
    }

    case 'FETCH_MISSION-CARD_BY_ID': {
      if (action.data) {
        return {
          ...state,
          missionCardById: action.data
        };
      }
      break;
    }

    case 'FETCH_MISSION-CARD': {
      if (action.data) {
        return {
          ...state,
          missionCard: action.data
        };
      }
      break;
    }

    case 'UPDATE_USER': {
      debugger
      if (action.data) {
        let partial = state.partials;
        partial.currentUser = action.data;
        return {
          ...state,
          loader: false,
          partials: partial
        };
      }
      break;
    }

    case 'FETCH_MY_PLAYLIST': {
      if (action.data) {
        return {
          ...state,
          myPlayList: action.data
        };
      }
      break;
    }

    default:
      return state;
  }
}
