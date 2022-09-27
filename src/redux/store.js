import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [{ id: 1, name: 'name', number: '123' }],
    filter: '',
  },
};

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
