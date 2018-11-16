import axios from 'axios'

export const FETCH_USER_STARTED = 'FETCH_USER_STARTED'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

const ROOT_URL = 'http://localhost:8080'
//const ROOT_URL = 'HTTP://192.168.0.12:8080'


export const fetchUser = (id) => {
  return dispatch => {
    dispatch(fetchUserStarted())
    axios({
      method: 'GET',
      url: '/api/users/' + id
    })
      .then( res => {
        dispatch(fetchUserSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchUserFailure( err.message ))
      } )
  }
}

const fetchUserStarted = () => ({
  type: FETCH_USER_STARTED,
})

const fetchUserSuccess = ( user ) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  }
}

const fetchUserFailure = ( error ) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const login = ( user ) => {
  return {
    type: LOGIN,
    payload: user,
  }
}

