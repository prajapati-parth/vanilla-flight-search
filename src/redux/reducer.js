import { SEARCH, TOGGLE_RESULT_LOADING } from './actions';

const defaultState = {
  origin: '',
  dest: '',
  departureDate: '',
  returnDate: '',
  searchResults: [],
  showNoSearchMessage: true,
  isResultLoading: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH:
      const { origin, dest, departureDate, returnDate, searchResults } = action.payload;
      return Object.assign({}, state, {
        origin,
        dest,
        departureDate,
        returnDate,
        searchResults
      });
    case TOGGLE_RESULT_LOADING:
      return Object.assign({}, state, {
        isResultLoading: !state.isResultLoading
      });
    default:
      return state;
  }
}