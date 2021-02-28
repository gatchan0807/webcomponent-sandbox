class MyButton extends HTMLElement {
  constructor() {
      super();
      this.innerHTML = `<button>${this.innerHTML}</button>`;
  }
}
customElements.define("my-button", MyButton);
