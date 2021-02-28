class MyButton extends HTMLElement {
  constructor() {
      super();
      this.innerHTML = `<button>Hello</button>`;
  }
}
customElements.define("my-button", MyButton);
