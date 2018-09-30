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

export const getMaxMinValues = (flightData) => {
  const range = { min: 0, max: 0 };
  if (!flightData || !flightData.length) {
    return range;
  }

  const firstPrice = flightData[0].returnJourney
    ? flightData[0].returnJourney.price + flightData[0].towardsJourney.price
    : flightData[0].towardsJourney.price;
  range.max = firstPrice;
  range.min = firstPrice;

  for (let i=0; i<flightData.length; i++) {
    const price = flightData[i].returnJourney
      ? flightData[i].returnJourney.price + flightData[i].towardsJourney.price
      : flightData[i].towardsJourney.price;

    if (price > range.max) {
      range.max = price;
    } else if (price < range.min) {
      range.min = price;
    }
  }

  return range;
}