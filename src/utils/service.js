export const fetchFlightData = (origin, dest, departureDate, returnDate) => {
  // create 1st promise for one way journey data
  const oneWayJourney = new Promise((resolve, reject) => {
    const dayOfWeek = moment(departureDate).day();
    const url = `https://flight-search-api.herokuapp.com/flights?Origin=${origin}&${dest ? `Dest=${dest}` : ''}${departureDate ? `&DayOfWeek=${dayOfWeek}` : ''}`;
    fetch(url)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(err => reject(err));
  });

  // create 2nd promise for return journey data
  const returnJourney = new Promise((resolve, reject) => {
    const dayOfWeek = moment(returnDate).day();
    const url = `https://flight-search-api.herokuapp.com/flights?Origin=${dest}&Dest=${origin}&DayOfWeek=${dayOfWeek}`;
    fetch(url)
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(err => reject(err));
  });

  return returnDate ? [oneWayJourney, returnJourney] : [oneWayJourney];
};