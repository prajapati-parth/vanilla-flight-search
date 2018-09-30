import { fetchFlightData } from '../utils/service';
import { buildFlightSearchResult } from '../utils/common';

// action types
export const SEARCH = 'SEARCH';
export const TOGGLE_RESULT_LOADING = 'TOGGLE_RESULT_LOADING';

// action
export const searchFlight = (origin, dest, departureDate, returnDate) => {
  return dispatch => {

    const flightPromise = fetchFlightData(origin, dest, departureDate, returnDate);

    Promise.all(flightPromise).then(result => {
      const searchResults = buildFlightSearchResult(result[0], result[1]);
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