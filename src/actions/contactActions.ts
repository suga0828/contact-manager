import { ContactInfo } from '../reducers/contactReducer';

import {
  getUsers,
  deleteUser,
  addUser,
  getUser,
  updateUser
} from '../services/Contacts.service';

export enum CONTACT_ACTIONS {
  GET_CONTACTS = 'GET_CONTACTS',
  GET = 'GET_CONTACT',
  ADD = 'ADD_CONTACT',
  UPDATE = 'UPDATE_CONTACT',
  DELETE = 'DELETE_CONTACT'
}

export interface ContactAction {
  type: CONTACT_ACTIONS;
  payload: any;
}

export const getContacts = () => async (
  dispatch: (action: ContactAction) => void
) => {
  const res = await getUsers();
  dispatch({ type: CONTACT_ACTIONS.GET_CONTACTS, payload: res });
};

export const getContact = (id: string) => async (
  dispatch: (action: ContactAction) => void
) => {
  const res = await getUser(id);
  dispatch({ type: CONTACT_ACTIONS.GET, payload: res });
};

export const addContact = (contact: ContactInfo) => async (
  dispatch: (action: ContactAction) => void
) => {
  const res = await addUser(contact);
  dispatch({ type: CONTACT_ACTIONS.ADD, payload: res });
};

export const updateContact = (contact: ContactInfo) => async (
  dispatch: (action: ContactAction) => void
) => {
  const res = await updateUser(contact);
  dispatch({ type: CONTACT_ACTIONS.UPDATE, payload: res });
};

export const deleteContact = (id: number) => async (
  dispatch: (action: ContactAction) => void
) => {
  await deleteUser(id);
  dispatch({ type: CONTACT_ACTIONS.DELETE, payload: id });
};
