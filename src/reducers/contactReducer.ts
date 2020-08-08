export interface ContactInfo {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export interface ContactsState {
  contacts: ContactInfo[];
}

const initialState: ContactsState = {
  contacts: [
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
  ] as ContactInfo[]
};

export enum ContactActions {
  get = 'GET_CONTACTS',
  add = 'ADD_CONTACT',
  edit = 'EDIT_CONTACT',
  delete = 'DELETE_CONTACT'
}

const reducer = (
  state = initialState,
  action: { type: ContactActions; payload: any }
): ContactsState => {
  switch (action.type) {
    case ContactActions.get:
      return {
        ...state
      };
    case ContactActions.add:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          { ...action.payload, id: state.contacts.length + 1 }
        ]
      };
    case ContactActions.edit:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
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

export default reducer;
