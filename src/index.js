import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughImg from "./assets/laughing.svg";

const imgElment = document.getElementById("joke-img");
const btnElment = document.getElementById("joke-btn");

imgElment.setAttribute("src", laughImg);

btnElment.addEventListener("click", generateJoke);

generateJoke();
