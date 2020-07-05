export interface ContactInterface {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export enum ContactActions {
  delete = 'DELETE_CONTACT'
}

export const mockedContacts: ContactInterface[] = [
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
  state: { contacts: ContactInterface[] },
  action: { type: string, payload: any }
): { contacts: ContactInterface[] } => {
  switch (action.type) {
    case ContactActions.delete:
      return {
        ...state,
        contacts: state.contacts.filter(con => con.id !== action.payload)
      };
    default:
      return state;
  }
};
