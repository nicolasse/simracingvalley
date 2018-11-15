import {
  FETCH_RANKING_STARTED,
  FETCH_RANKING_SUCCESS,
  FETCH_RANKING_FAILURE,
  SEARCH_DRIVER_STARTED,
  SEARCH_DRIVER_SUCCESS,
  SEARCH_DRIVER_FAILURE,
} from '../actions/getRanking'

const INITIAL_STATE = {
    pages: 0,
    rank: [],
    found: [],
    error: null,
    loading: false,
}


const rankingReducer = (state = INITIAL_STATE, action) => {
  let error
  switch(action.type) {
    case FETCH_RANKING_STARTED:
      return {...state, rank: [], error: null, loading:true}
    case FETCH_RANKING_SUCCESS:
      return {...state, pages: action.payload.pages, rank: action.payload.driversStats, error:null, loading: false }
    case FETCH_RANKING_FAILURE:
      error = action.payload || {message: action.payload.message}
      return {...state, rank: [], error: error, loading: false}
    case SEARCH_DRIVER_STARTED:
      return { ...state, error: null, loading: true }
    case SEARCH_DRIVER_SUCCESS: 
      return { ...state, found: action.payload.driversStats, error: null, loading: false }
    case SEARCH_DRIVER_FAILURE:
      error = action.payload || { message: action.payload.message }
      return { ...state, error: error, loading: false }
    default: return state
  }
}

export default rankingReducer
