"use strict";

class String {
  constructor(str, option) {
    (this.string = str), (this.option = option);
  }
  selectOption() {
    switch (this.option) {
      case "reverse":
        return this.string.split("").reverse().join("");

      case "to_upper_case":
        return this.string.toUpperCase();

      case "to_lower_case":
        return this.string.toLowerCase();

      default:
        return this.string;
    }
  }
  render() {
    const p = document.createElement("p"),
      body = document.body;
    p.innerHTML = this.selectOption();
    body.append(p);
  }
}
export default String;
