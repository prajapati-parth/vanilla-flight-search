import { SEARCH } from './actions';

const defaultState = {
  origin: '',
  dest: '',
  departureDate: '',
  returnDate: '',
  searchResults: []
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
    default:
      return state;
  }
}