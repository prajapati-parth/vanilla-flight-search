export const SEARCH = 'SEARCH';

export const searchFlight = (origin, dest, departureDate, returnDate) => {
  return dispatch => {
    fetch(`https://flight-search-api.herokuapp.com/flights?Origin=${origin}&${dest ? `Dest=${dest}` : ''}`)
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        const payload = {
          origin,
          dest,
          departureDate,
          returnDate,
          searchResults: result
        };
  
        dispatch({
          type: SEARCH,
          payload
        })
      });
  }
}