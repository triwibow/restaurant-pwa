import '../component/hero-component';
import '../component/post-list';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createPageLoaderTemplate } from '../templates/template';

const Home = {
  async render() {
    const html = `
      ${document.querySelector('main').innerHTML = createPageLoaderTemplate.show()}
        <hero-component></hero-component>
        <section class="content" id="content">
            <h1 class="content-title">Explore Restaurant</h1>
            <div class="posts" id="posts">
                <post-list></post-list>
            </div>
        </section>
    `;
    return html;
  },
  async afterRender() {
    const postContainer = document.querySelector('post-list');
    const { restaurants } = await RestaurantDbSource.listRestaurant();
    postContainer.value = restaurants;
    createPageLoaderTemplate.remove();
  },
};

export default Home;
