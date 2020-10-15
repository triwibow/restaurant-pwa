class NavBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <nav>
            <h1 class="nav-logo">Restro</h1>
            <a class="nav-menu" id="menu" href="#" aria-label="menu">
                <i class="fas fa-bars"></i>
            </a>
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#/favorite" class="nav-link">Favorite</a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/triwibow" class="nav-link" target="_blank" rel="noreferrer">About</a>
                </li>
            </ul> 
        </nav>

        <ul class="sidenav">
            <li class="sidenav-item">
                <a href="#" class="sidenav-link">Home</a>
            </li>
            <li class="sidenav-item">
                <a href="#/favorite" class="sidenav-link">Favorite</a>
            </li>
            <li class="sidenav-item">
                <a href="https://github.com/triwibow" class="sidenav-link" target="_blank" rel="noreferrer">About</a>
            </li>
        </ul> 
    `;
  }
}

customElements.define('nav-bar', NavBar);
