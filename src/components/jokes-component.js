import { getJoke } from "../services/api-service";

const $appContainer = document.querySelector("#app");
// we define those elements with let because now the elements not exist, and will be created after
// so this values changes, so is nessesary defines by let
let $btnOther, $olJokes;

const createJokesSectionHTML = () => {
  const html = `<h1 class="mt-5">Jokes</h1>
    <hr />
    <button class="btn btn-primary mb-3">Other joke</button>
    <ol class="list-group">
    </ol>`;
  const $divJokes = document.createElement("div");
  $divJokes.innerHTML = html;
  $appContainer.append($divJokes);
};

// events -> when press the button we add a joke to the list
const events = () => {
  $olJokes = document.querySelector("ol");
  $btnOther = document.querySelector("button");

  $btnOther.addEventListener("click", async () => {
    $btnOther.disabled = true;
    createJoke(await getJoke());
    $btnOther.disabled = false;
  });
};

// @param joke = {id, value}
const createJoke = (joke) => {
  const $olItem = document.createElement("li");
  $olItem.innerHTML = `<b>${joke.id}</b> --> ${joke.value}`;
  $olItem.classList.add("list-group-item");
  $olJokes.append($olItem);
};

// usually we create a function called init that render the content of this page or component
// first execute the construction of the page and after the events
export const init = () => {
  createJokesSectionHTML();
  events();
};
