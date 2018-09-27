// rederer
import render from './render';

// views
import header from './views/header';
import pageContent from './views/page-content';

// event listeners
import { attachEvents_searchBox } from './views/search-box';

// style
import './app.scss';

export default () => {
  // render the main app
  const mainContainer = document.getElementById('root');
  render(`${header} ${pageContent}`, mainContainer);

  attachEvents_searchBox();
}