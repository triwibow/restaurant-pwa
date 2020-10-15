import './post-item';

class PostList extends HTMLElement {
  set value(data) {
    this._data = data;
    this._render();
  }

  _render() {
    this._data.forEach((item) => {
      const postItem = document.createElement('post-item');
      this.appendChild(postItem);
      postItem.value = item;
    });
  }
}

customElements.define('post-list', PostList);
