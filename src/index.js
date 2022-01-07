import "@babel/polyfill";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// SIMPLE WAY
// Import our services
import { getJoke } from "./services/api-service";
// getJoke().then(console.log);

// PAGE OF JOKES
// Import our jokes components
import { init as initJokes } from "./components/jokes-component";
initJokes();

// PAGE OF USERS
import { init as initUsers } from "./components/users-component";
initUsers();

// CRUD
// if we want to import all we need to use *
import * as CRUD from "./services/crud-service";

// RECEIVE USER
CRUD.receivedUser(1).then(console.log);

// CREATE USER
CRUD.createUser({
  name: "Angel",
  job: "Developer",
}).then(console.log);

// UPDATE USER
CRUD.updateUser(1, { name: "Carlos", job: "Farmer" }).then(console.log);

// DELETE USER
CRUD.deleteUser(1).then(console.log);

// PAGE OF GALERY
import { init as initGalery } from "./components/galery-component";
initGalery();
