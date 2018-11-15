import axios from 'axios'

export const FETCH_RANKING_STARTED = 'FETCH_RANKING_STARTED'
export const FETCH_RANKING_SUCCESS = 'FETCH_RANKING_SUCCESS'
export const FETCH_RANKING_FAILURE = 'FETCH_RANKING_FAILURE'
export const SEARCH_DRIVER_STARTED = 'SEARCH_DRIVER_STARTED'
export const SEARCH_DRIVER_SUCCESS = 'SEARCH_DRIVER_SUCCESS'
export const SEARCH_DRIVER_FAILURE = 'SEARCH_DRIVER_FAILURE'

//const ROOT_URL = 'http://simracingvalley.us-east-2.elasticbeanstalk.com'
const ROOT_URL = 'http://localhost:8080'
//const ROOT_URL = 'HTTP://192.168.0.12:8080'


export const fetchRanking = (page) => {
  return dispatch => {
    dispatch(fetchRankingStarted()) 
    axios({
      method: 'GET',
      url: '/drivers/page/' + page
    })
     .then( res => {
      dispatch( fetchRankingSuccess(res.data) )
    } )
      .catch(err => {
        dispatch(fetchRankingFailure( err.message ))
      })
  }
} 

const fetchRankingStarted = () => ({
  type: FETCH_RANKING_STARTED,
})

const fetchRankingSuccess = (ranking) => {
  return {
    type: FETCH_RANKING_SUCCESS,
    payload: ranking,
  }
}

const fetchRankingFailure = (error) => {
  return {
    type: FETCH_RANKING_FAILURE,
    payload: error,
  }
}
export const searchDriver = ( name ) => {
  return dispatch => {
    dispatch(searchDriverStarted())
    axios({
      method: 'GET',
      url: '/drivers/search/' + name
    })
      .then( res => {
        dispatch(searchDriverSuccess(res.data))
      } )
      .catch( err => {
        dispatch(searchDriverFailure( err.message ))
      } )
  }
}

const searchDriverStarted = (  ) => ({
  type: SEARCH_DRIVER_STARTED
})

const searchDriverSuccess = ( list ) => ({
    type: SEARCH_DRIVER_SUCCESS,
    payload: list,
})

const searchDriverFailure = ( error ) => ({
    type: SEARCH_DRIVER_FAILURE,
    payload: error,
})
