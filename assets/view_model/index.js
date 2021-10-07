"use strict";

import model from "../model/index.js";
console.log(model);

const btnElem = document.querySelector("#submit"),
  inputElem = document.querySelector('input[type="text"]'),
  selectOption = document.querySelector("#option");

btnElem.addEventListener("click", addString);

function addString(event) {
  event.preventDefault();
  //   render();
  new model(inputElem.value, selectOption.value).render();
  inputElem.value = "";
}

// function render() {
//   const p = document.createElement("p"),
//     body = document.body;
//   p.innerHTML = new model(inputElem.value, selectOption.value).selectOption();
//   body.append(p);
// }
