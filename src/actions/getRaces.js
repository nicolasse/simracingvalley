import axios from 'axios'

export const FETCH_RACES_STARTED = 'FETCH_RACES_STARTED'
export const FETCH_RACES_SUCCESS = 'FETCH_RACES_SUCCESS'
export const FETCH_RACES_FAILURE = 'FETCH_RACES_FAILURE'

export const fetchRaces = (page) => {
  return dispatch => {
    dispatch(fetchRacesStarted())
    axios({
      method: 'GET',
      url: '/api/races/page/' + page
    })
      .then( res => {
        dispatch(fetchRacesSuccess( res.data ))
      } )
      .catch( err => {
        dispatch(fetchRacesFailure ( err.message ))
      } )
  }
}

const fetchRacesStarted = (  ) =>({
    type: FETCH_RACES_STARTED,
})
const fetchRacesSuccess = (races) => {
  return {
    type: FETCH_RACES_SUCCESS,
    payload: races,
  }
}

const fetchRacesFailure = (error) => {
  return {
    type: FETCH_RACES_FAILURE,
    payload: error,
  }
}
