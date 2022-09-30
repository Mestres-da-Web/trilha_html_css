class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul>
            <li><a href="/HTML/Navegação/Elemento personalizado/src/">Início</a></li>
            <li><a href="/HTML/Navegação/Elemento personalizado/src/pages/Contact/">Contato</a></li>
            <li><a href="/HTML/Navegação/Elemento personalizado/src/pages/Gallery">Galeria</a></li>
            <li><a href="/HTML/Navegação/Elemento personalizado/src/pages/Products">Produtos</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
