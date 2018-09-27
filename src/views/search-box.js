import copy from '../utils/copy-text';
import { searchFlight } from '../redux/actions';

const { originCityPlaceholder, destinationCityPlaceholder,
  departureDatePlaceholder, returnDatePlaceholder, passengersInputPlaceholder,
  searchButtonLabel } = copy.searchBox;

const searchOptions = ['IAD','TPA','IND','BWI','JAX','LAS','MCI','MCO','MDW',
  'PHX','ISP','FLL','PBI','RSW','JAN','HOU','BHM','BNA','ORF','PHL','ABQ','ALB',
  'AMA','AUS','BDL','BOI','BUF','BUR','CLE','CMH','DEN','ELP','GEG','LAX','LBB',
  'LIT','MAF','MHT','MSY','OAK','OKC','OMA','ONT','PDX','PIT','PVD','RDU','RNO',
  'SAN','SAT','SDF','SEA','SFO','SJC','SLC','SMF','SNA','STL','TUL','TUS','DAL','DTW'];

export default `
  <div class='search-box-container'>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="one-way-tab" role="tab">One way</a>
        <a class="nav-item nav-link" id="return-tab" role="tab">Return</a>
      </div>
    </nav>
    <div class="tab-content">
      <form id='search-form'>
        <input value="LAS" id="origin-city-input" type="text" class="form-control placesearch" placeholder="${originCityPlaceholder}" />
        <input value="ABQ" id="destination-city-input" type="text" class="form-control placesearch" placeholder="${destinationCityPlaceholder}" />

        <input id="departure-date-input" type="text" class="form-control placesearch" placeholder="${departureDatePlaceholder}" />
        <input id="return-date-input" type="text" class="form-control placesearch d-none" placeholder="${returnDatePlaceholder}" />

        <input id="passengers-input" type="number" min="1" class="form-control placesearch" placeholder="${passengersInputPlaceholder}" />\
      </form>

      <button id="flight-search" type="button" class="btn btn-primary">${searchButtonLabel}</button>
      </div>
  </div>
`;

export const attachEvents_searchBox = (store) => {
  document.getElementById('departure-date-input').DatePickerX.init({
    minDate: new Date()
  });

  new autoComplete({
    selector: document.getElementById('origin-city-input'),
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = searchOptions;
        var matches = [];
        for (let i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
  });

  new autoComplete({
    selector: document.getElementById('destination-city-input'),
    minChars: 2,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = searchOptions;
        var matches = [];
        for (let i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
  });

  document.getElementById('one-way-tab').addEventListener('click', () => {
    const currentTab = document.getElementById('one-way-tab');
    const tabs = document.getElementById('nav-tab').children;
    const returnDateInput = document.getElementById('return-date-input');

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    currentTab.classList.add('active');
    returnDateInput.classList.add('d-none');
    returnDateInput.DatePickerX.remove();
    returnDateInput.value = '';
  });

  document.getElementById('return-tab').addEventListener('click', () => {
    const currentTab = document.getElementById('return-tab');
    const tabs = document.getElementById('nav-tab').children;
    const returnDateInput = document.getElementById('return-date-input');
    const departureDateInput = document.getElementById('departure-date-input');
    const departureSelectedDate = document.getElementById('departure-date-input').DatePickerX.getValue();

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    currentTab.classList.add('active');
    returnDateInput.classList.remove('d-none');

    returnDateInput.DatePickerX.init({
      minDate: departureDateInput
    });
    document.getElementById('departure-date-input').DatePickerX.remove();
    document.getElementById('departure-date-input').DatePickerX.init({
      minDate: new Date(),
      maxDate: document.getElementById('return-date-input')
    });
    document.getElementById('departure-date-input').DatePickerX.setValue(departureSelectedDate);
  });

  document.getElementById('flight-search').addEventListener('click', (e) => {
    const origin = document.getElementById('origin-city-input').value;
    const dest = document.getElementById('destination-city-input').value;
    const departureDate = document.getElementById('departure-date-input').DatePickerX.getValue();
    const returnTabActive = document.getElementById('return-tab').classList.contains('active');
    const returnDate = returnTabActive
      ? document.getElementById('return-date-input').DatePickerX.getValue()
      : document.getElementById('return-date-input').value;

    store.dispatch(searchFlight(origin, dest, departureDate, returnDate));
  });
}