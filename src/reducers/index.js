import { combineReducers } from 'redux'
import rankingReducer from './rankingReducer'
import racesReducer from './racesReducer'
import raceReducer from './raceReducer'

const rootReducer = combineReducers({
  rankingReducer, racesReducer, raceReducer
})

export default rootReducer
