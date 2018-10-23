import axios from 'axios'

export const FETCH_DRIVER = 'FETCH_DRIVER'
export const FETCH_DRIVER_SUCCESS = 'FETCH_DRIVER_SUCCESS'
export const FETCH_DRIVER_FAILURE = 'FETCH_DRIVER_FAILURE'

export const FETCH_HISTORIC = 'FETCH_HISTORIC'
export const FETCH_HISTORIC_SUCCESS = 'FETCH_HISTORIC_SUCCESS'
export const FETCH_HISTORIC_FAILURE = 'FETCH_HISTORIC_FAILURE' 

export const FETCH_INCIDENTS = 'FETCH_INCIDENTS'
export const FETCH_INCIDENTS_SUCCESS = 'FETCH_INCIDENTS_SUCCESS'
export const FETCH_INCIDENTS_FAILURE = 'FETCH_INCIDENTS_FAILURE'

const ROOT_URL = 'HTTP://localhost:8080'

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

export const fetchHistoric = (steamID) => {
  const request = axios ({
    method: 'GET',
    url: `${ROOT_URL}/rating/${steamID}`
  })
  return {
    type: FETCH_HISTORIC,
    payload: request
  }
}

export const fetchHistoricSuccess = (historic) => {
  return {
    type: FETCH_HISTORIC_SUCCESS,
    payload: historic
  }
}

export const fetchHistoricFailure = (error) => {
  return {
    type: FETCH_HISTORIC_FAILURE,
    payload: error
  }
}

export const fetchIncidents = (steamID) => {
  const request = axios ({
    method: 'GET',
    url: `${ROOT_URL}/incidents/${steamID}`
  })
  return {
    type: FETCH_INCIDENTS,
    payload: request
  }
}

export const fetchIncidentsSuccess = ( historic ) => {
  return {
    type: FETCH_INCIDENTS_SUCCESS,
    payload: historic,
  }
}

export const fetchIncidentsFailure = (error) => {
  return {
    type: FETCH_INCIDENTS_FAILURE,
    payload: error
  }
}
