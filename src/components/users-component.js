import { getUsers } from "../services/users-service";

const $appContainer = document.querySelector("#app2");
let $tableBody;
const crearHtml = () => {
  const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

  const div = document.createElement("div");
  div.innerHTML = html;
  $appContainer.appendChild(div);

  $tableBody = document.querySelector("tbody");
  // Crear una referencia al TBODY
  // ya que los TRs van dentro del tbody
  // querySelector('tbody');
  // Crear una variable para mantener la referencia?
};

// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
// {
//     "id": 7,
//     "email": "michael.lawson@reqres.in",
//     "first_name": "Michael",
//     "last_name": "Lawson",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
// }
const createRowUser = (user, index) => {
  // En la tabla deben de colocar un correlativo empezando en 1
  // También deben de colocar el avatar

  const html = `
        <td scope="col"> ${index} </td>
        <td scope="col"> ${user.email} </td>
        <td scope="col"> ${user.first_name} ${user.last_name} </td>
        <td scope="col">
            <img class="img-thumbnail" src="${user.avatar}"></
        </td>
    `;

  const $trUser = document.createElement("tr");
  $trUser.innerHTML = html;

  // Añadir el table row (tr) dentro del TBody creado anteriormente
  $tableBody.appendChild($trUser);
};

const renderRows = async () => {
  const users = await getUsers();

  users.forEach((user, index) => {
    createRowUser(user, index + 1);
  });
};

export const init = async () => {
  crearHtml();
  await renderRows();
  // Obtener la lista de usuarios usando el servicio creado
  // Por cada usuario, llamar la función crearFila (for, forEach)
  // Colocar el init en el index.js, para que se ejecute la creación
};
