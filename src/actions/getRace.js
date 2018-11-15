import axios from 'axios'

//import race from '../example.js' 

export const FETCH_RACE_STARTED = 'FETCH_RACE_STARTED'
export const FETCH_RACE_SUCCESS = 'FETCH_RACE_SUCCESS'
export const FETCH_RACE_FAILURE = 'FETCH_RACE_FAILURE'
export const SELECT_STATS = 'SELECT_STATS'
export const CLEAR_STATS = 'CLEAR_STATS' 


const ROOT_URL = 'http://localhost:8080'
//const ROOT_URL = 'HTTP://192.168.0.12:8080'

export const fetchRace = ( id ) => {
  return dispatch => {
    dispatch( fetchRaceStarted() )
    axios({
      method: 'GET',
      url: '/races/' + id
    })
      .then( res => {
        dispatch( fetchRaceSuccess( res.data ) )
      } )
      .catch( err => {
        dispatch( fetchRaceFailure( err.message ) )
      } )
  }
}

const fetchRaceStarted = (  ) => ({
  type: FETCH_RACE_STARTED,
})

const fetchRaceSuccess = ( race ) => ({
    type: FETCH_RACE_SUCCESS,
    payload: race,
})

const fetchRaceFailure = ( error ) => ({
    type: FETCH_RACE_FAILURE,
    payload: error,
})

export const selectStats = ( stats ) => {
  return {
    type: SELECT_STATS,
    payload: stats,
  }
}

export const clearStats = () => {
  return {
    type: CLEAR_STATS,
  }
}

