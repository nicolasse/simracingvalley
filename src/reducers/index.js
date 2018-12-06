import { combineReducers } from 'redux'
import rankingReducer from './rankingReducer'
import racesReducer from './racesReducer'
import raceReducer from './raceReducer'
import navbarReducer from './navbarReducer'
import userReducer from './userReducer'
import driverReducer from './driverReducer'
import recordsReducer from './recordsReducer'
import voteReducer from './voteReducer'
import scheduleReducer from './scheduleReducer'

const rootReducer = combineReducers({
  rankingReducer,
  racesReducer,
  raceReducer,
  navbarReducer,
  userReducer,
  driverReducer,
  recordsReducer,
  voteReducer,
  scheduleReducer,
})

export default rootReducer
