import searchBox from './search-box';
import searchResult from './search-results';
import searchFilter from './search-filter';

export default (state) => {
  return `
    <div class='row'>
      <div class='col-sm-12 col-md-4'>
        ${searchBox}
        ${searchFilter(state)}
      </div>

      <div class='col-sm-12 col-md-8'>
        <div id='search-results-container'>
          ${searchResult(state)}
        </div>
      </div>
    </div>
  `
};