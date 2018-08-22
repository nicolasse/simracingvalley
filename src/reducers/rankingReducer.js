import {
  FETCH_RANKING,
  FETCH_RANKING_SUCCESS,
  FETCH_RANKING_FAILURE,
} from '../actions/getRanking'

const INITIAL_STATE = {
  ranking: {
    rank: {},
    error: null,
    loading: false,
  }
}

const rankingReducer = (state = INITIAL_STATE, action) => {
  let error
  switch(action.type) {
    case FETCH_RANKING:
      return {...state, ranking: {rank: {}, error: null, loading:true}}
    case FETCH_RANKING_SUCCESS:
      return {...state, ranking: {rank: action.payload, error:null, loading: false }}
    case FETCH_RANKING_FAILURE:
      error = action.payload || {message: action.payload.message}
      return {...state, ranking: {rank: {}, error: error, loading: false}}
    default: return state
  }
}

export default rankingReducer
