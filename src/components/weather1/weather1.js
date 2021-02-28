import { default as template } from "./template.html";

// importする形を取ると、Parcelが自動的にグローバルに領域展開してしまうのでテンプレートリテラルで定義
const style = `
button {
  background-color: royalblue;
  font-size: 1.3rem;
  color: white;
  border: 0;
  border-radius: 0.3rem;
  padding: 0.5rem 1.5rem;
}

button:hover {
  cursor: pointer;
  opacity: 0.8;
}
`;

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>${style}</style>${template}`;
  }
}
customElements.define("my-button", MyButton);