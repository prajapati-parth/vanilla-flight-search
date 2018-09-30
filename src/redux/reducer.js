import { SEARCH, TOGGLE_RESULT_LOADING, UPDATE_SLIDER_VALUES,
  UPDATE_SEARCH_RESULTS } from './actions';

const defaultState = {
  origin: '',
  dest: '',
  departureDate: '',
  returnDate: '',
  searchResults: [],
  searchResultsMaster: [],
  showNoSearchMessage: true,
  isResultLoading: false,
  sliderMinValue: '500.00',
  sliderMaxValue: '1000.00'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH:
      return Object.assign({}, state, {
        origin: action.payload.origin,
        dest: action.payload.dest,
        departureDate: action.payload.departureDate,
        returnDate: action.payload.returnDate,
        searchResults: action.payload.searchResults,
        searchResultsMaster: action.payload.searchResults
      });
    case TOGGLE_RESULT_LOADING:
      return Object.assign({}, state, {
        isResultLoading: !state.isResultLoading
      });
    case UPDATE_SLIDER_VALUES:
      return Object.assign({}, state, {
        sliderMinValue: action.payload.sliderMinValue,
        sliderMaxValue: action.payload.sliderMaxValue
      });
    case UPDATE_SEARCH_RESULTS:
      return Object.assign({}, state, {
        searchResults: action.payload.searchResults
      });
    default:
      return state;
  }
}