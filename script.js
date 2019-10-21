function fetchChuckNorisJokeJSON() {
  const url = `https://api.chucknorris.io/jokes/random`;
  axios
    .get(url)
    .then(function(response) {
      return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
    })
    .then(function(joke) {
      console.log("data decoded from JSON:", joke);

      // Build a block of HTML
      const jokeHtml = `
          <img src='${joke.icon_url}' />
          <p>${joke.value}</p>
        `;
      document.querySelector("#chuck-norris").innerHTML = jokeHtml;
      document
        .querySelector("#chuck-norris>img")
        .addEventListener("click", () => fetchChuckNorisJokeJSON());
    });
}

fetchChuckNorisJokeJSON();
