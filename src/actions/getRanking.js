import axios from 'axios'

export const FETCH_RANKING = 'FETCH_RANKING'
export const FETCH_RANKING_SUCCESS = 'FETCH_RANKING_SUCCESS'
export const FETCH_RANKING_FAILURE = 'FETCH_RANKING_FAILURE'

const ROOT_URL = 'http://simracingvalley.com'

export const fetchRanking = () => {
  const request = axios({
    method: 'post', //API is wrong
    url: `${ROOT_URL}/getDriverList`,
    headers: [],
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
