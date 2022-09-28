import { combineReducers, compose, createStore } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState = {
//   contacts: {
//     items: [
// { id: 1, name: 'Alex', number: '123' },
// { id: 2, name: 'Bob', number: '123' },
// { id: 3, name: 'John', number: '123' },
// { id: 4, name: 'Mike', number: '123' },
//     ],
//     filterString: 'test',
//   },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'phonebook/CreateContact':
//       return { contacts: [...state.contacts, action.payload] };
//     case 'phonebook/filterStringContacts':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filterString: action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };
// const contatcsInitialState = {
//   contacts: {
//     items: [
//       { id: 1, name: 'Alex', number: '123' },
//       { id: 2, name: 'Bob', number: '123' },
//       { id: 3, name: 'John', number: '123' },
//       { id: 4, name: 'Mike', number: '123' },
//     ],
//     filterString: 'test',
//   },
// };
const defaultItems = [
  { id: 1, name: 'Jack', number: '123' },
  { id: 2, name: 'Bob', number: '123' },
  { id: 3, name: 'John', number: '123' },
  { id: 4, name: 'Mike', number: '123' },
];

const itemsReducer = (state = defaultItems, action) => state;
const filterReducer = (state = 'ja', { type, payload }) => {
  switch (type) {
    case 'phonebook/FilterContacts':
      return payload;

    default:
      return state;
  }
};

const contactReducer = combineReducers({
  items: itemsReducer,
  filterString: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
