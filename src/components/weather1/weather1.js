import { default as template } from "./template.html";

class MyButton extends HTMLElement {
  constructor() {
      super();
      this.innerHTML = template;
  }
}
customElements.define("my-button", MyButton);
