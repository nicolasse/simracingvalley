import {
  FETCH_DRIVER,
  FETCH_DRIVER_SUCCESS,
  FETCH_DRIVER_FAILURE,
  FETCH_HISTORIC,
  FETCH_HISTORIC_SUCCESS,
  FETCH_HISTORIC_FAILURE,
  FETCH_INCIDENTS,
  FETCH_INCIDENTS_SUCCESS,
  FETCH_INCIDENTS_FAILURE,
} from '../actions/driverActions'

const INITIAL_STATE = {
  driver: {
  //driver model
    driverName: '',
    racesDone: '',
    points: '',
    top10: {},
    incidents: '',
    pole: '',
    // ser model
    avatar: '',
    name: '',
    lastName: '',
    about: '',
    birthDay: '',
    city: '',
    gender: '',
    phrase: '',
    state: '',
    ratingHistoric: {
      labels: [],
      datasets:[]
    },
    incidentsHistoric: {
      labels: [],
      datasets: []
    }
  },
  error: null,
  loading: false,
}

const driverReducer = ( state = INITIAL_STATE, action ) => {
  let error
  switch(action.type) {
    case FETCH_DRIVER:
      return { ...state, error: null, loading: true }
    case FETCH_DRIVER_SUCCESS:
      let oldState = Object.assign({}, state)
      let driver = Object.assign({}, state.driver)

      return { ...oldState, driver:{...driver, ...action.payload}, error: null, loading: false}
    case FETCH_DRIVER_FAILURE:
      error = action.payload || { message: action.payload.message }
      return {...state, error: error, loading: false}
    case FETCH_HISTORIC:
      return {...state, error: null, loading: true }
    case FETCH_HISTORIC_SUCCESS:
      return { ...state, driver: { ...state.driver, ratingHistoric: action.payload }, error: null, loading: false }
    case FETCH_HISTORIC_FAILURE:
      error = action.payload || { message: action.payload.message }
      return {...state, error: error, loading: false}
    case FETCH_INCIDENTS:
      return {...state, error: null, loading: true}
    case FETCH_INCIDENTS_SUCCESS:
      return {...state, driver: {...state.driver, incidentsHistoric: action.payload}, error: null, loading: false}
    case FETCH_INCIDENTS_FAILURE:
      error = action.payload || {message: action.payload.message}
      return { ...state, error: error, loading: false }
    default:
      return state
  }
}

export default driverReducer
