import { default as template } from "./template.html";
import { default as style } from "./style.css";

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>${style}</style>${template}`;
  }
}
customElements.define("my-button", MyButton);
