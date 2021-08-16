import { quoting } from "./data.js";

console.log(quoting[0]);

let quoteP = document.querySelector("div.quotes>p");
let quoteH3 = document.querySelector("div.quotes>h3");
let generateBtn = document.querySelector("div>button");

let generateqQuotes = () => {
  let ranNum = Math.floor(Math.random() * quoting.length);
  quoteP.textContent = quoting[ranNum].quote;
  quoteH3.textContent = "-" + quoting[ranNum].author;
};

generateBtn.addEventListener("click", () => {
  generateqQuotes();
});
