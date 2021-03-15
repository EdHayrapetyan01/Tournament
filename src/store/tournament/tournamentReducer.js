import {
  FETCH_TOURNAMENT_SUCCESS,
  FETCH_TOURNAMENT_FAILURE,
  RESET_TOURNAMENT,
  ADD_TOURNAMENT_ON_STORAGE
} from './tournamentTypes'

const initialState = {
  tournaments: [],
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOURNAMENT_SUCCESS:
      return {
        tournaments: action.payload,
        error: ''
      }
    case FETCH_TOURNAMENT_FAILURE:
      return {
        tournaments: [],
        error: action.payload
      }
    case RESET_TOURNAMENT:
      return {
        tournaments: [],
      }
      case ADD_TOURNAMENT_ON_STORAGE:
        return {
          tournaments: [],
        }
    default: return state
  }
}

export default reducer