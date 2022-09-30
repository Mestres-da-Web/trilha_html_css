class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const baseURL = "/HTML/Navegação/Elemento personalizado/src";
    this.innerHTML = `
      <header>
        <nav>
          <ul>
            <li><a href="${baseURL}/">Início</a></li>
            <li><a href="${baseURL}/pages/Contact/">Contato</a></li>
            <li><a href="${baseURL}/pages/Gallery">Galeria</a></li>
            <li><a href="${baseURL}/pages/Products">Produtos</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
