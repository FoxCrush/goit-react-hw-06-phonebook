import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactReducer from './contatcs/contactsRedusers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
