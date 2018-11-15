import {
  FETCH_RACES_STARTED,
  FETCH_RACES_SUCCESS,
  FETCH_RACES_FAILURE,
} from '../actions/getRaces'

const INITIAL_STATE = {
  pages: 0,
  races: [],
  error: null,
  loading: false,
}

const racesReducer = (state = INITIAL_STATE, action) => {
  let error
  switch(action.type) {
    case FETCH_RACES_STARTED:
      return { ...state, races: [], error: null, loading: true }
    case FETCH_RACES_SUCCESS:
      return { ...state, races: action.payload.races, pages: action.payload.pages, error: null, loading: false }
    case FETCH_RACES_FAILURE:
      error = action.payload || { message: action.payload.message }
      return { ...state, races: [], error: error, loading: false }
    default: return state
  }
}

export default racesReducer
