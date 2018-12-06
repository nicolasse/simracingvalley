import {
  FETCH_SCHEDULE_STARTED,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAILURE,
} from '../actions/scheduleActions'

const INITIAL_STATE = {
  error: null,
  loading: false,
  schedule: []
}

const scheduleReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case FETCH_SCHEDULE_STARTED:
      return { ...state, error: null, loading: true }
    case FETCH_SCHEDULE_SUCCESS:
      return { schedule: action.payload, error: null, loading: false }
    case FETCH_SCHEDULE_FAILURE:
      let error = action.payload || { message: action.payload.message }
      return { ...state, loading: false, error: error  }
    default: return state
  }
}

export default scheduleReducer
