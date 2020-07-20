import { ContactInfo } from "../components/contacts/Contacts.reducer";

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async (): Promise<ContactInfo[]> => {
  const response = await fetch(BASE_API_URL);

  return await response.json();
}

export const addUser = async (contact: ContactInfo): Promise<ContactInfo> => {
  const init: RequestInit = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  }
  const response = await fetch(BASE_API_URL, init);

  return await response.json();
}

export const deleteUser = async(id: number): Promise<Response> => {
  return await fetch(`${BASE_API_URL}/${id}`, { method: 'DELETE' });
}
