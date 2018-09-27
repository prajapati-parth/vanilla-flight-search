export default ({origin, dest, departureDate, returnDate, searchResults}) => {
  return `
    <div id='search-results-container'>
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

      <div class='results-container'>
        ${
          searchResults.length > 0
            ? searchResults.reduce((acc, element) => {
               return `${acc}
                <div>${element.OriginName}</div>
                <div>${element.DestName}</div>
              `
            }, '')
            : ''
        }
      </div>
    </div>
  `;
};