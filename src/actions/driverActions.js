import axios from 'axios'

export const FETCH_DRIVER_STARTED = 'FETCH_DRIVER_STARTED'
export const FETCH_DRIVER_SUCCESS = 'FETCH_DRIVER_SUCCESS'
export const FETCH_DRIVER_FAILURE = 'FETCH_DRIVER_FAILURE'


const ROOT_URL = 'HTTP://localhost:8080'


export const fetchDriver = (id) => {
  return dispatch => {
    dispatch(fetchDriverStarted())
    axios({
      method: 'GET',
      url: '/drivers/' + id
    })
      .then( res => {
        dispatch(fetchDriverSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchDriverFailure( err.message ))
      } )
  }
}

const fetchDriverStarted = (  ) => ({
  type: FETCH_DRIVER_STARTED
})

const fetchDriverSuccess = ( driver ) => ({
    type: FETCH_DRIVER_SUCCESS,
    payload: driver,
})

const fetchDriverFailure = ( error ) => ({
    type: FETCH_DRIVER_FAILURE,
    payload: error,
})

