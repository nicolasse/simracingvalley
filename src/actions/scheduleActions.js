import axios from 'axios'

export const FETCH_SCHEDULE_STARTED = 'FETCH_SCHEDULE_STARTED'
export const FETCH_SCHEDULE_SUCCESS = 'FETCH_SCHEDULE_SUCCESS'
export const FETCH_SCHEDULE_FAILURE = 'FETCH_SCHEDULE_FAILURE'

export const fetchSchedule = (token) => {
  let request = { method: 'GET', url: '/api/schedule' }
  if(token) {
    request.headers = {
        'Content-Type': 'application/json',
        'x-access-token': token
    }
  }
  
  return dispatch => {
    dispatch(fetchScheduleStarted())
    axios( request )
      .then( res =>{ 
        dispatch(fetchScheduleSuccess(res.data)) 
      } )
      .catch( err => {
        dispatch(fetchScheduleFailure(err.message))
      } )
  }
}

const fetchScheduleStarted = () => ({
  type: FETCH_SCHEDULE_STARTED
})

const fetchScheduleSuccess = ( schedule ) => {
  return {
    type: FETCH_SCHEDULE_SUCCESS,
    payload: schedule,
  }
}

const fetchScheduleFailure = ( error ) => ({
  type: FETCH_SCHEDULE_FAILURE,
  payload: error
})
