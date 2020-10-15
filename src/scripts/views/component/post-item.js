import CONFIG from '../../globals/config';

class PostItem extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this.innerHTML = `
            <article class="post-item">
                <img data-src="${CONFIG.BASE_IMAGE_URL('small') + this._data.pictureId}" alt="${this._data.name}" class="lazyload post-item-thumbnail">
                <div class="post-item-content">
                    <h1 class="post-item-title"><a href="#/detail/${this._data.id}">${this._data.name}</a></h1>
                    <i class="fas fa-map-marker-alt"></i>
                    <span class="post-item-location">${this._data.city}</span>
                    <p class="post-item-description">${this._data.description}</p>
                    <i class="fas fa-star"></i>
                    <span class="post-item-rate">${this._data.rating}</span>
                </div>
            </article>`;
  }
}

customElements.define('post-item', PostItem);
