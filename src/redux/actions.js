import { fetchFlightData } from '../utils/service';

// action types
export const SEARCH = 'SEARCH';
export const TOGGLE_RESULT_LOADING = 'TOGGLE_RESULT_LOADING';

// action
export const searchFlight = (origin, dest, departureDate, returnDate) => {
  return dispatch => {

    const flightPromise = fetchFlightData(origin, dest, departureDate, returnDate);

    Promise.all(flightPromise).then(result => {
      const searchResults = result[1] ? result[0].concat(result[1]) : result[0];
      const payload = { origin, dest, departureDate, returnDate, searchResults };

      dispatch({
        type: SEARCH,
        payload
      });
      dispatch({
        type: TOGGLE_RESULT_LOADING
      });
    });
  }
}