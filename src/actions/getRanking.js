import axios from 'axios'

export const FETCH_RANKING = 'FETCH_RANKING'
export const FETCH_RANKING_SUCCESS = 'FETCH_RANKING_SUCCESS'
export const FETCH_RANKING_FAILURE = 'FETCH_RANKING_FAILURE'

//const ROOT_URL = 'http://simracingvalley.us-east-2.elasticbeanstalk.com'
//const ROOT_URL = 'http://localhost:8080'
const ROOT_URL = 'HTTP://192.168.0.12:8080'

export const fetchRanking = (page) => {
  const request = axios({
    method: 'GET',
    url: `${ROOT_URL}/drivers/page/${page}`,
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
