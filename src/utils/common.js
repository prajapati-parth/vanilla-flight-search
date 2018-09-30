export const buildFlightSearchResult = (oneWayFlights, returnFlights) => {
  const searchresult = [];

  if (!returnFlights || !returnFlights.length) {
    for(let i=0; i<oneWayFlights.length; i++) {
      searchresult.push({
        towardsJourney: oneWayFlights[i]
      });
    }

    return searchresult;
  }

  for(let i=0; i<oneWayFlights.length; i++) {

    for(let j=0; j<returnFlights.length; j++) {
      searchresult.push({
        towardsJourney: oneWayFlights[i],
        returnJourney: returnFlights[j]
      });
    }

  }

  return searchresult;
}