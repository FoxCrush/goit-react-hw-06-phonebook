import { compose, createStore } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  contacts: {
    items: [
      { id: 1, name: 'Alex', number: '123' },
      { id: 2, name: 'Bob', number: '123' },
      { id: 3, name: 'John', number: '123' },
      { id: 4, name: 'Mike', number: '123' },
    ],
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

const store = createStore(reducer, composeEnhancers());

export default store;
