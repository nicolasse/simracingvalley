import { combineReducers } from 'redux'
import rankingReducer from './rankingReducer'
import racesReducer from './racesReducer'
import raceReducer from './raceReducer'
import navbarReducer from './navbarReducer'
import userReducer from './userReducer'
import driverReducer from './driverReducer'

const rootReducer = combineReducers({
  rankingReducer, racesReducer, raceReducer, navbarReducer, userReducer, driverReducer
})

export default rootReducer
