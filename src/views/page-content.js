import searchBox from './search-box';
import searchResult from './search-results'

export default (state) => {
  return `
    <div class='row'>
      <div class='col-sm-12 col-md-4'>
        ${searchBox}
      </div>

      <div class='col-sm-12 col-md-8'>
        ${searchResult(state)}
      </div>
    </div>
  `
};