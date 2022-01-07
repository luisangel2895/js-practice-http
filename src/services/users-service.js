const urlUsers = "https://reqres.in/api/users?page=2";

export const getUsers = async () => {
  const resp = await fetch(urlUsers);
  const { data: users } = await resp.json();
  return users;
};
