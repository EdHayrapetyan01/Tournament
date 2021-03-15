import axios from 'axios'
import {
  FETCH_TOURNAMENT_SUCCESS,
  FETCH_TOURNAMENT_FAILURE,
  RESET_TOURNAMENT,
  ADD_TOURNAMENT_ON_STORAGE
} from './tournamentTypes';

export const fetchTournaments = (query) => {
  return (dispatch) => {
    axios
      .get(`https://api-search.win.gg/search?q=${query}&index=tournament`)
      .then(response => {
        const tournaments = response.data[0].documents
        dispatch(fetchTournamentsSuccess(tournaments))
      })
      .catch(error => {
        dispatch(fetchTournamentsFailure(error.message))
      })
  }
}

export const fetchTournamentsSuccess = tournament => {
  return {
    type: FETCH_TOURNAMENT_SUCCESS,
    payload: tournament
  }
}

export const fetchTournamentsFailure = error => {
  return {
    type: FETCH_TOURNAMENT_FAILURE,
    payload: error
  }
}

export const resetTournament = () => {
  return {
    type: RESET_TOURNAMENT,
  }
}
export const addTournamentOnStorage = (value) => {
  return {
    type: ADD_TOURNAMENT_ON_STORAGE,
    tournaments: value
  }
}
