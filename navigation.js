const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    nav {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ADD8E6;
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      font-weight: 700;
      margin: 0 25px;
      color: #000;
      text-decoration: none;
    }

    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #000;
    }
  </style>
  <header>
    <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="pet.html">Your Pet</a></li>
        <li><a href="shop.html">Shop</a></li>
      </ul>
    </nav>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
	const shadowRoot = this.attachShadow({ mode: 'closed' });
	shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);