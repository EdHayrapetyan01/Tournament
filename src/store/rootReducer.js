import { combineReducers } from 'redux'
import tournamentReducer from './tournament/tournamentReducer';

const rootReducer = combineReducers({
  tournament: tournamentReducer
})

export default rootReducer