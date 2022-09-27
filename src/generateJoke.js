import axios from "axios";

const config = {
  headers: { Accept: "application/json" },
};

const jokeElement = document.getElementById("joke");

async function generateJoke() {
  const joke = await axios.get("https://icanhazdadjoke.com", config);
  jokeElement.innerHTML = joke.data.joke;
}
export default generateJoke;
