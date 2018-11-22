import {
  FETCH_TRACKS_STARTED,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  FETCH_CARS_STARTED,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  FETCH_RECORDS_STARTED,
  FETCH_RECORDS_SUCCESS,
  FETCH_RECORDS_FAILURE,
} from '../actions/getRecords'

const INITIAL_STATE = {
  loading: false,
  tracks: [],
  cars: [],
  records: [],
  error: null,
}

const recordsReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case FETCH_TRACKS_STARTED:
      return {
        ...state,
        loading: true,
        cars: [],
        records: []
      }
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        tracks: action.payload,
        records: [],
      }
    case FETCH_TRACKS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    case FETCH_CARS_STARTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        records: [],
      }
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      }
    case FETCH_RECORDS_STARTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_RECORDS_SUCCESS:
      return {
        ...state,
        loading: false,
        records: action.payload,
      }
    case FETCH_RECORDS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    default: return state
  }

}

export default recordsReducer
