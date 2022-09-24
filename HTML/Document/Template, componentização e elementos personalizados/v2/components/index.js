class CustomElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <h2>Hello, world!</h2>
      <p>Isso é um template</p>
    `;
  }

  disconnectedCallback() {}

  adoptedCallback() {}

  attributeChangedCallback() {}
}

customElements.define("custom-component", CustomElement);
