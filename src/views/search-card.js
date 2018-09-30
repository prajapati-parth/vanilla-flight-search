import copy from '../utils/copy-text';

export default ({towardsJourney, returnJourney, price, FlightNum, Origin, Dest, DepTime, ArrTime}) => {
  return `
    <div class='search-card-container'>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          
            <div class='flight-details'>
              <h5 class="card-title">Rs. ${returnJourney ? (towardsJourney.price + returnJourney.price).toFixed(2) : towardsJourney.price.toFixed(2) }</h5>
              <div class='row'>
                <div class='col-lg-6'>
                  <div class='one-way-details-container'>
                    <span class='text-muted'>${towardsJourney.FlightNum}</span>
                    <p class='route'>${towardsJourney.Origin} > ${towardsJourney.Dest}</p>
                    <p class='depart'>Depart: ${moment(towardsJourney.DepTime, ["HHmm"]).format('hh:mm A')}</p>
                    <p class='arrival'>Arrive: ${moment(towardsJourney.ArrTime, ["HHmm"]).format('hh:mm A')}</p>
                  </div>
                </div>
                <div class='col-lg-6'>
                  ${
                    returnJourney
                      ? `<div class='return-details-container'>
                        <span class='text-muted'>${returnJourney.FlightNum}</span>
                        <p class='route'>${returnJourney.Origin} > ${returnJourney.Dest}</p>
                        <p class='depart'>Depart: ${moment(returnJourney.DepTime, ["HHmm"]).format('hh:mm A')}</p>
                        <p class='arrival'>Arrive: ${moment(returnJourney.ArrTime, ["HHmm"]).format('hh:mm A')}</p>
                      </div>`
                      : ''
                  }
                </div>
              </div>
            </div>

            <div class='flight-action'>
              <a href="#" class="btn btn-primary">${copy.searchCard.bookButtonText}</a>
            </div>
          
        </div>
      </div>
    </div>
  `;
}