import {
  LOGIN,
  LOGOUT,
} from '../actions/userActions'

const INITIAL_STATE = {
    logged: false,
    username: '',
    userId: '',
    token: '',
}

const userReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case LOGIN:
      var user = action.payload
      return { ...state, logged: true, username: user.username, userId: user.userId, token: user.token }
    case LOGOUT:
      return { ...state, logged: false, username: '', userId: '', token: '' }
    default: return state
  }
}

export default userReducer
