export const getUsers = async (): Promise<any> => {
  const request = await fetch('https://jsonplaceholder.typicode.com/users');

  return await request.json();
}
