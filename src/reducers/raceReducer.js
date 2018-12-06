import {
  FETCH_RACE_STARTED,
  FETCH_RACE_SUCCESS,
  FETCH_RACE_FAILURE,
  SELECT_STATS,
  CLEAR_STATS,
} from '../actions/getRace'

const INITIAL_STATE = {
  race: {
    _id: '',
    practice: [],
    qualify: [],
    race: [],
  },
  error: null,
  loading: false,
  stats:[]
}

const raceReducer = (state = INITIAL_STATE, action) => {
  let error
  switch(action.type) {
    case FETCH_RACE_STARTED:
      return { ...state, error: null, loading: true }
      //return{...state, race: action.payload.race, error: null, loading: false}
    case FETCH_RACE_SUCCESS:
      return { ...state, race: action.payload, error: null, loading: false }
    case FETCH_RACE_FAILURE:
      error = action.payload || { message: action.payload.message }
      return { ...state, race: {}, error: error, loading: false }
    case SELECT_STATS:
      return { ...state, stats: action.payload }
    case CLEAR_STATS:
      return {...state, stats: [] }
    default: return state
  }
}

export default raceReducer
