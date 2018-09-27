import { SEARCH } from './actions';

const defaultState = {
  searchLabel: '',
  departureDate: '',
  returnDate: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH:
      const { searchLabel, departureDate, returnDate } = action.payload;
      return {
        ...state,
        searchLabel,
        departureDate,
        returnDate
      };
    default:
      return state;
  }
}