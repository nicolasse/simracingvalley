import {
  LOGIN,
  LOGOUT,
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../actions/userActions'

const INITIAL_STATE = {
    logged: false,
    username: '',
    userId: '',
    token: '',
    user: {},
    error: null,
    loading: false,
}

const userReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case LOGIN:
      var user = action.payload
      return { ...state, logged: true, username: user.username, userId: user.userId, token: user.token }
    case LOGOUT:
      return { ...state, logged: false, username: '', userId: '', token: '' }
    case FETCH_USER_STARTED: 
      return {...state, error: null, loading: true }
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload  }
    case FETCH_USER_FAILURE:
      let error = action.payload || {message: action.payload.message}
      return { ...state, loading: false, error: error }
    default: return state
  }
}

export default userReducer
