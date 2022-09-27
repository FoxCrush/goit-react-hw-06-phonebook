// export const myAction = value => {
//   return {
//     type: 'MY_ACTION',
//     payload: value,
//   };
// };
export const createContact = value => ({
  type: 'phonebook/CreateContact',
  payload: value,
});

export const filterContacts = value => ({
  type: 'phonebook/FilterContacts',
  payload: value,
});
