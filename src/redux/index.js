import reducer from './reducer';

const { createStore } = Redux;

export default () => createStore(reducer);