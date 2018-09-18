import axios from 'axios'

export const FETCH_RANKING = 'FETCH_RANKING'
export const FETCH_RANKING_SUCCESS = 'FETCH_RANKING_SUCCESS'
export const FETCH_RANKING_FAILURE = 'FETCH_RANKING_FAILURE'

const ROOT_URL = 'http://simracingvalley.us-east-2.elasticbeanstalk.com'

export const fetchRanking = () => {
  const request = axios({
    method: 'POST', //API is wrong
    url: `${ROOT_URL}/getDriverList`, //would be /users
  })

  return {
    type: FETCH_RANKING,
    payload: request,
  }
}

export const fetchRankingSuccess = (ranking) => {
  return {
    type: FETCH_RANKING_SUCCESS,
    payload: ranking,
  }
}

export const fetchRankingFailure = (error) => {
  return {
    type: FETCH_RANKING_FAILURE,
    payload: error,
  }
}
