import { fetchFlightData } from '../utils/service';
import { buildFlightSearchResult, getMaxMinValues } from '../utils/common';

// action types
export const SEARCH = 'SEARCH';
export const TOGGLE_RESULT_LOADING = 'TOGGLE_RESULT_LOADING';
export const UPDATE_SLIDER_VALUES = 'UPDATE_SLIDER_VALUES';
export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS'; 

// action
export const searchFlight = (origin, dest, departureDate, returnDate) => {
  return dispatch => {

    const flightPromise = fetchFlightData(origin, dest, departureDate, returnDate);

    Promise.all(flightPromise).then(result => {
      const searchResults = buildFlightSearchResult(result[0], result[1]);
      const newSliderRange = getMaxMinValues(searchResults);
      const payload = { origin, dest, departureDate, returnDate, searchResults };
      
      // update the slider
      const priceSlider = document.getElementById('price-slider');
      priceSlider.noUiSlider.updateOptions(
        {
          range: newSliderRange
        },
        true
      );
      priceSlider.noUiSlider.reset();

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