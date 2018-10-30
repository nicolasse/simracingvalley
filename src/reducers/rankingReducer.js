import {
  FETCH_RANKING,
  FETCH_RANKING_SUCCESS,
  FETCH_RANKING_FAILURE,
} from '../actions/getRanking'

const INITIAL_STATE = {
    pages: 0,
    rank: [],
    error: null,
    loading: false,
}


const rankingReducer = (state = INITIAL_STATE, action) => {
  let error
  switch(action.type) {
    case FETCH_RANKING:
      return {...state, rank: [], error: null, loading:true}
    case FETCH_RANKING_SUCCESS:
      return {...state, pages: action.payload.pages, rank: action.payload.driversStats, error:null, loading: false }
    case FETCH_RANKING_FAILURE:
      error = action.payload || {message: action.payload.message}
      return {...state, rank: [], error: error, loading: false}
    default: return state
  }
}

export default rankingReducer
