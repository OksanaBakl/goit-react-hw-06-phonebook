import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

uuidv4();

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: uuidv4,
    name,
    number,
  },
}));

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');

// export default { addContact, deleteContact, changeFilter };
