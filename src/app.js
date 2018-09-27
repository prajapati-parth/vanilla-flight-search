// rederer
import render from './render';

// views
import header from './views/header';
import pageContent from './views/page-content';
import searchResults from './views/search-results';

// event listeners
import { attachEvents_searchBox } from './views/search-box';

// store
import initiateStore from './redux';

// style
import './app.scss';

export default () => {
  // initiate store
  const store = initiateStore();
  const state = store.getState();

  // render the main app
  const mainContainer = document.getElementById('root');
  render(`${header} ${pageContent(state)}`, mainContainer);

  attachEvents_searchBox(store);

  // subscribe to store changes
  store.subscribe(() => renderSearchResults(store));
};

const renderSearchResults = (store) => {
  const searchResultContainer = document.getElementById('search-results-container');
  const state = store.getState();

  render(searchResults(state), searchResultContainer);
};