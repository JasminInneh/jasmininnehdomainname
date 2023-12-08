/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomNumber = Math.random() * 10;
  // document.querySelector("#newDomainBTN").addEventListener("click", () => {
  // document.querySelector("#the-domain-name").innerHTML = generateDomain();
  // });
};

let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let containerselect = document.querySelector(".domain-names");
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        console.log(pronoun[k] + adj[i] + noun[j] + ".com");
        let newChild = document.createElement("h1");
        newChild.innerText = pronoun[k] + adj[i] + noun[j] + ".com";
        containerselect.append(newChild);
      }
    }
  }
};
console.log(generateDomain());


