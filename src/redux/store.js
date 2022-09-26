import { createStore } from 'redux';

const reducer = (state = { x: 5 }, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
