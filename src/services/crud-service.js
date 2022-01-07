const urlCRUD = "https://reqres.in/api/users";

// RECEIVED -> GET
const receivedUser = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`);
  const { data } = await resp.json();
  return data;
};

// CREATE -> POST
const createUser = async (user) => {
  const resp = await fetch(`${urlCRUD}`, {
    method: "POST",
    // we need to send the data like in LocalStorage with jSON.stringify
    body: JSON.stringify(user),
    // the headers is extra information only nessesary if the backend need it
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await resp.json();
};

// UPDATE -> PUT
const updateUser = async (id, user) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "PUT",
    // we need to send the data like in LocalStorage with jSON.stringify
    body: JSON.stringify(user),
    // the headers is extra information only nessesary if the backend need it
    headers: {
      "Content-Type": "application/json",
    },
  });
  // we can use try/catch block if we want
  return await resp.json();
};

// DELETE -> DELETE
const deleteUser = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: "DELETE",
  });
  return resp.ok ? `User ${id} deleted` : `Cant delete user ${id}`;
};

export { receivedUser, createUser, updateUser, deleteUser };
