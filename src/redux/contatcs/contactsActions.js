export const createContact = value => ({
  type: 'phonebook/CreateContact',
  payload: value,
});

export const filterContacts = value => ({
  type: 'phonebook/FilterContacts',
  payload: value,
});
export const deleteContact = value => ({
  type: 'phonebook/DeleteContact',
  payload: value,
});
