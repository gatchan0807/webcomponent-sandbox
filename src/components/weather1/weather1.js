import { default as template } from "./template.html";

// importする形を取ると、Parcelが自動的にグローバルに領域展開してしまうのでテンプレートリテラルで定義
const style = `
* {
  color: royalblue;
  font-weight: bold;
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