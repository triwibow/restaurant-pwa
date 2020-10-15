import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    notifContainer: document.querySelector('#notif-favorite-container'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
