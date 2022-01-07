const jokeUrl = "https://api.chucknorris.io/jokes/random";

// FETCH
// The fetch returns a promise for that we use then to receive the answer of this
// petition
// The answer is constained into the body: ReadableStream, to get this data we need
// to use the method .json() to transform the data into a json, but this function .json()
// return a promise too
fetch(jokeUrl).then((res) => {
  res.json().then(({ id, value }) => {
    return id + value;
  });
});

// we show that in this way we create a promise hell so we can chain promises
fetch(jokeUrl)
  .then((resp) => resp.json())
  .then(({ id, value }) => {
    return id + value;
  });

// For the service we use sync await functions
// ____________________________________________

const getJoke = async () => {
  try {
    const resp = await fetch(jokeUrl);
    const { icon_url, id, value } = await resp.json();
    return { icon_url, id, value };
  } catch (error) {
    throw error;
  }
};

export { getJoke };
