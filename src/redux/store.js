import { createStore } from 'redux';

const initialState = { contacts: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'phonebook/CreateContact':
      return { contacts: [...state.contacts, action.payload] };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
