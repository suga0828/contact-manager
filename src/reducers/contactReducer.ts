import { CONTACT_ACTIONS } from '../actions/contactActions';

export interface ContactInfo {
  id?: number | string;
  name: string;
  email: string;
  phone: string;
}

export interface ContactsState {
  contacts: ContactInfo[];
  contact: ContactInfo;
}

const initialState: ContactsState = {
  contacts: [],
  contact: {} as ContactInfo
};

const reducer = (
  state = initialState,
  action: { type: CONTACT_ACTIONS; payload: any }
): ContactsState => {
  switch (action.type) {
    case CONTACT_ACTIONS.GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case CONTACT_ACTIONS.GET:
      return { ...state, contact: action.payload };
    case CONTACT_ACTIONS.ADD:
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload }]
      };
    case CONTACT_ACTIONS.UPDATE:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    case CONTACT_ACTIONS.DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(con => con.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
