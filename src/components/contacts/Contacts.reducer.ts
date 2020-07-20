export interface ContactInfo {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

export enum ContactActions {
  add = 'ADD_CONTACT',
  delete = 'DELETE_CONTACT',
  fill = 'FILL_CONTACTS'
}

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
    case ContactActions.fill:
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
};
