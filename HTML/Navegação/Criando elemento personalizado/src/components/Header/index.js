class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul>
            <li><a href="/HTML/Navegação/Componente header/src/pages/Contact">Contact</a></li>
            <li><a href="/HTML/Navegação/Componente header/src/pages/Gallery">Gallery</a></li>
            <li><a href="/HTML/Navegação/Componente header/src/pages/Products">Products</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
