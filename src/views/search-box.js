import copy from '../utils/copy-text';

const { originCityPlaceholder, destinationCityPlaceholder,
  departureDatePlaceholder, returnDatePlaceholder, passengersInputPlaceholder,
  searchButtonLabel } = copy.searchBox;

export default `
  <div class='search-box-container'>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="one-way-tab" role="tab">One way</a>
        <a class="nav-item nav-link" id="return-tab" role="tab">Return</a>
      </div>
    </nav>
    <div class="tab-content">
      <input id="origin-city-input" type="text" class="form-control placesearch" placeholder="${originCityPlaceholder}" />
      <input id="destination-city-input" type="text" class="form-control placesearch" placeholder="${destinationCityPlaceholder}" />

      <input id="departure-date-input" type="text" class="form-control placesearch" placeholder="${departureDatePlaceholder}" />
      <input id="return-date-input" type="text" class="form-control placesearch d-none" placeholder="${returnDatePlaceholder}" />

      <input id="passengers-input" type="number" min="1" class="form-control placesearch" placeholder="${passengersInputPlaceholder}" />
    </div>
    <button id="flight-search" type="button" class="btn btn-primary">${searchButtonLabel}</button>
  </div>
`;

export const attachEvents_searchBox = () => {
  document.getElementById('departure-date-input').DatePickerX.init({
    minDate: new Date()
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
}