import axios from 'axios'

export const FETCH_RACES = 'FETCH_RACES'
export const FETCH_RACES_SUCCESS = 'FETCH_RACES_SUCCESS'
export const FETCH_RACES_FAILURE = 'FETCH_RACES_FAILURE'

//const ROOT_URL = 'http://simracingvalley.us-east-2.elasticbeanstalk.com'
const ROOT_URL = 'http://localhost:8080'

export const fetchRaces = () => {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}/races`
  })
  return {
    type: FETCH_RACES,
    payload: request,
  }
}

export const fetchRacesSuccess = (races) => {
  return {
    type: FETCH_RACES_SUCCESS,
    payload: races,
  }
}

export const fetchRacesFailure = (error) => {
  return {
    type: FETCH_RACES_FAILURE,
    payload: error,
  }
}
