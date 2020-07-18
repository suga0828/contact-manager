export interface ContactInfo {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export enum ContactActions {
  add = 'ADD_CONTACT',
  delete = 'DELETE_CONTACT'
}

export const mockedContacts: ContactInfo[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'jdow@mail.com',
    phone: '555-555-5555'
  },
  {
    id: 2,
    name: 'Karen Willians',
    email: 'kwill@mail.com',
    phone: '555-555-5555'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'jdow@mail.com',
    phone: '555-555-5555'
  }
];

export const reducer = (
  state: { contacts: ContactInfo[] },
  action: { type: string, payload: any }
): { contacts: ContactInfo[] } => {
  switch (action.type) {
    case ContactActions.add:
      return {
        ...state,
        contacts: [{ ...action.payload, id: state.contacts.length + 1 }, ...state.contacts]
      };
    case ContactActions.delete:
      return {
        ...state,
        contacts: state.contacts.filter(con => con.id !== action.payload)
      };
    default:
      return state;
  }
};
