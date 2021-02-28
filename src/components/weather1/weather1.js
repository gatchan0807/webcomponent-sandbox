import { default as template } from "./template.html";

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `${template}`;
  }
}
customElements.define("my-button", MyButton);
