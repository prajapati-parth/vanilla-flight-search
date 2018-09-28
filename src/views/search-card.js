import copy from '../utils/copy-text';

export default ({price, FlightNum, Origin, Dest, DepTime, ArrTime}) => {
  return `
    <div class='search-card-container'>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          
            <div class='flight-details'>
              <h5 class="card-title">Rs. ${price.toFixed(2)}</h5>
              <div class='row'>
                <div class='col-lg-6'>
                  <div class='one-way-details-container'>
                    <span class='text-muted'>${FlightNum}</span>
                    <p class='route'>${Origin} > ${Dest}</p>
                    <p class='depart'>Depart: ${moment(DepTime, ["HHmm"]).format('hh:mm A')}</p>
                    <p class='arrival'>Arrive: ${moment(ArrTime, ["HHmm"]).format('hh:mm A')}</p>
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='return-details-container'></div>
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