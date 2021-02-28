class MyButton extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({mode: "open"})
      this.shadowRoot.innerHTML = `<button>
        <slot name="label" />
      </button>`;
  }
}
customElements.define("my-button", MyButton);
