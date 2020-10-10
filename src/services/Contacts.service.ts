import { ContactInfo } from '../store/reducers/contactReducer';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com/users';

const headers = (method: string, body?: any): RequestInit => ({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
});

export const getUsers = async (): Promise<ContactInfo[]> => {
  const response = await fetch(BASE_API_URL);

  return await response.json();
};

export const getUser = async (id: string): Promise<ContactInfo> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);

  return await response.json();
};

export const addUser = async (contact: ContactInfo): Promise<ContactInfo> => {
  const response = await fetch(BASE_API_URL, headers('POST', contact));

  return await response.json();
};

export const updateUser = async (
  contact: ContactInfo
): Promise<ContactInfo> => {
  const response = await fetch(
    `${BASE_API_URL}/${contact.id}`,
    headers('PUT', contact)
  );

  return await response.json();
};

export const deleteUser = async (id: number): Promise<Response> => {
  return await fetch(`${BASE_API_URL}/${id}`, headers('DELETE'));
};
