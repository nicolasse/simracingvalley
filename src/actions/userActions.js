//import axios from 'axios'

export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

//const ROOT_URL = 'http://localhost:8080'
//const ROOT_URL = 'HTTP://192.168.0.12:8080'

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

