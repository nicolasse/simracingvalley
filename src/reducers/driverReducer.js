import {
  FETCH_DRIVER,
  FETCH_DRIVER_SUCCESS,
  FETCH_DRIVER_FAILURE,
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
      return {  driver:{...action.payload.driverStats}, error: null, loading: false}
    case FETCH_DRIVER_FAILURE:
      error = action.payload || { message: action.payload.message }
      return {...state, error: error, loading: false}
    default:
      return state
  }
}

export default driverReducer
