import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [{ id: 1, name: 'name', number: '123' }],
    filter: 'test',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'phonebook/CreateContact':
      return { contacts: [...state.contacts, action.payload] };
    case 'phonebook/FilterContacts':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: action.payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
