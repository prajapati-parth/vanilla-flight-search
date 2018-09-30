import filterValues from './search-filter-values';
import { UPDATE_SLIDER_VALUES, UPDATE_SEARCH_RESULTS } from '../redux/actions';
import copy from '../utils/copy-text';

export default (state) => {
  return `
    <div class='search-fliter-container'>
      <h5>${copy.seachFilter.title}</h5>

      <div id='slider-values'>
        ${filterValues(state)}
      </div>

      <div class='slider-container'>
        <div id='price-slider'></div>
      </div>
    </div>
  `;
};

export const attachEvents_searchFliter = (store) => {
  let priceSlider = document.getElementById('price-slider');

  noUiSlider.create(priceSlider, {
    start: [500, 10000],
    connect: true,
    range: {
      'min': 500,
      'max': 10000
    },
    step: 500,
    pips: {
      mode: 'positions',
      values: [0, 25, 50, 75, 100],
      density: 4
    }
  });

  priceSlider.noUiSlider.on('update', function() {
    // get slider values
    const sliderValues = this.get();

    // dispatch to update filter values
    store.dispatch({
      type: UPDATE_SLIDER_VALUES,
      payload: {
        sliderMinValue: sliderValues[0],
        sliderMaxValue: sliderValues[1]
      }
    });
  });

  priceSlider.noUiSlider.on('change', function() {
    const priceRange = this.get();
    const filteredData = store.getState().searchResultsMaster.filter((result) => {
      const price = result.returnJourney
        ? result.returnJourney.price + result.towardsJourney.price
        : result.towardsJourney.price;
    
      return (price >= priceRange[0] && price <= priceRange[1])
    });

    store.dispatch({
      type: UPDATE_SEARCH_RESULTS,
      payload: {
        searchResults: filteredData
      }
    });
  });
}