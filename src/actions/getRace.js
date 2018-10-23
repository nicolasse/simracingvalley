import axios from 'axios'

//import race from '../example.js' 

export const FETCH_RACE = 'FETCH_RACE'
export const FETCH_RACE_SUCCESS = 'FETCH_RACE_SUCCESS'
export const FETCH_RACE_FAILURE = 'FETCH_RACE_FAILURE'
export const SELECT_STATS = 'SELECT_STATS'
export const CLEAR_STATS = 'CLEAR_STATS' 


const ROOT_URL = 'http://localhost:8080'

export const fetchRace = ( id ) => {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}/races/${id}`
  })
  return {
    type: FETCH_RACE,
    payload: request,
  }
}

export const fetchRaceSuccess = ( race ) => {
  return {
    type: FETCH_RACE_SUCCESS,
    payload: race,
  }
}

export const fetchRaceFailure = ( error ) => {
  return {
    type: FETCH_RACE_FAILURE,
    payload: error,
  }
}

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

