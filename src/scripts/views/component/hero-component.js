class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero-overlay">
              <div class="hero-inner">
                <h1 class="hero-title">Fresh and Delicious Food for Your Health</h1>
                <p class="hero-tag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sit ipsam maiores debitis, tempora itaque? Sed minima similique vero doloribus voluptatum, odit nisi.</p>
              </div>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-component', HeroComponent);
