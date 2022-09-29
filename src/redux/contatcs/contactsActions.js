import { v4 as uuidv4 } from 'uuid';

export const createContact = ({ name, number }) => ({
  type: 'phonebook/CreateContact',
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});
export const deleteContact = id => ({
  type: 'phonebook/DeleteContact',
  payload: id,
});

export const filterContacts = value => ({
  type: 'phonebook/FilterContacts',
  payload: value,
});
