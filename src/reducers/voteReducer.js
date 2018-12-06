import {
  VOTE_DRIVER_STARTED,
  VOTE_DRIVER_SUCCESS,
  VOTE_DRIVER_FAILURE,
} from '../actions/voteActions'

const INITIAL_STATE = {
  vote: [],
  error: null, 
  loading: false,
}

const voteReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case VOTE_DRIVER_STARTED:
      return { ...state, loading: true, error: null }
    case VOTE_DRIVER_SUCCESS:
      return { ...state, loading: false, error: null }
    case VOTE_DRIVER_FAILURE:
      let error = action.payload || { message: action.payload.message }
      return { ...state, loading: false, error: error }
    default: return state
  }
}

export default voteReducer


