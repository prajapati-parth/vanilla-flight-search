import searchCard from './search-card';
import loader from './loader';
import copy from '../utils/copy-text';

const { noResultsMessage, noSearchMessage } = copy.searchResults;

export default ({origin, dest, departureDate, returnDate, searchResults, showNoSearchMessage, isResultLoading}) => {
  return `
    <div id='search-results-container' class='search-results-container'>
      <div class='route-container'>
        <div class='row'>
          <div class='col-lg-8'>
            ${ origin && `<span class='origin route'>${origin} ></span>` }
            ${ dest && `<span class='dest route'>${dest}</span>` }
            ${ returnDate && `<span class='dest route'>> ${origin}</span>` }
          </div>

          <div class='col-lg-4'>
            ${ departureDate && `<span class='date float-right'>Depart: ${moment(departureDate).format('DD MMM YYYY')}</span>` }
            ${ returnDate && `<span class='date float-right'>Return: ${moment(returnDate).format('DD MMM YYYY')}</span>` }
          </div>
        </div>
      </div>

      ${
        isResultLoading ? loader : ''
      }
      
      ${
        searchResults.length > 0
          ? `<div class='results-container'>
            ${
              searchResults.reduce((acc, element) => {
                return `${acc}
                  ${searchCard(element)}
                `
              }, '')
            }
          </div>`
          : `<div class='results-none-container'>
            <h4>${showNoSearchMessage ? noSearchMessage : noResultsMessage}</h4>
          </div>`
      }
    </div>
  `;
};