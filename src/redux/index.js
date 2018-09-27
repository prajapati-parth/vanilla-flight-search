import thunk from 'redux-thunk';
import reducer from './reducer';

const { createStore, applyMiddleware } = Redux;

export default () => createStore(reducer, applyMiddleware(thunk));