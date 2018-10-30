import axios from 'axios'

export const FETCH_DRIVER = 'FETCH_DRIVER'
export const FETCH_DRIVER_SUCCESS = 'FETCH_DRIVER_SUCCESS'
export const FETCH_DRIVER_FAILURE = 'FETCH_DRIVER_FAILURE'
const ROOT_URL = 'HTTP://192.168.0.12:8080'

export const fetchDriver = (id) => {
  const request = axios ({
    method: 'GET',
    url: `${ROOT_URL}/drivers/${id}`
  })
  return {
    type: FETCH_DRIVER,
    payload: request,
  }
}

export const fetchDriverSuccess = ( driver ) => {
  return {
    type: FETCH_DRIVER_SUCCESS,
    payload: driver,
  }
}

export const fetchDriverFailure = ( error ) => {
  return {
    type: FETCH_DRIVER_FAILURE,
    payload: error,
  }
}
