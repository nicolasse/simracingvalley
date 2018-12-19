import axios from 'axios'

export const FETCH_TRACKS_STARTED = 'FETCH_TRACKS_STARTED'
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS'
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE'

export const FETCH_CARS_STARTED = 'FETCH_CARS_STARTED'
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS'
export const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE'

export const FETCH_RECORDS_STARTED = 'FETCH_RECORDS_STARTED'
export const FETCH_RECORDS_SUCCESS = 'FETCH_RECORDS_SUCCESS'
export const FETCH_RECORDS_FAILURE = 'FETCH_RECORDS_FAILURE'


export const fetchTracks = () => {
  return dispatch => {
    dispatch(fetchTracksStarted())
    axios({
      method: 'GET',
      url: `/api/records`
    })
      .then( res => {
        dispatch(fetchTracksSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchTracksFailure(err.message))
      } )
  }
}

const fetchTracksSuccess = tracks => ({
  type: FETCH_TRACKS_SUCCESS,
  payload: tracks,
})

const fetchTracksStarted = () => ({
  type: FETCH_TRACKS_STARTED,
  
})

const fetchTracksFailure = error => ({
  type: FETCH_TRACKS_FAILURE,
  payload: error,
})


export const fetchCars = ( track ) => {
  return dispatch => {
    dispatch(fetchCarsStarted())
    let trackEncoded = encodeURIComponent(track)
    axios({
      method: 'GET',
      url: `/api/records/${trackEncoded}`
    })
      .then( res => {
        dispatch(fetchCarsSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchCarsFailure(err.message))
      } )
  }
}

const fetchCarsSuccess = cars => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
})

const fetchCarsStarted = () => ({
  type: FETCH_CARS_STARTED,
  
})

const fetchCarsFailure = error => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
})


export const fetchRecords = ( track, car ) => {
  return dispatch => {
    dispatch(fetchRecordsStarted())
    let trackEncoded = encodeURIComponent(track)
    let carEncoded = encodeURIComponent( car)
    axios({
      method: 'GET',
      url: `/api/records/${trackEncoded}/${carEncoded}`
    })
      .then( res => {
        dispatch(fetchRecordsSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchRecordsFailure(err.message))
      } )
  }
}

const fetchRecordsSuccess = records => ({
  type: FETCH_RECORDS_SUCCESS,
  payload: records,
})

const fetchRecordsStarted = () => ({
  type: FETCH_RECORDS_STARTED,
  
})

const fetchRecordsFailure = error => ({
  type: FETCH_RECORDS_FAILURE,
  payload: error,
})

