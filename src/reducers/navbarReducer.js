import { TOGGLE_LOADING } from '../actions/navbarActions'

const INITIAL_STATE = {
  loading: false,
}

const navbarReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case TOGGLE_LOADING:
      return { ...state, loading: !state.loading }
    default: return state
  }
}

export default navbarReducer
