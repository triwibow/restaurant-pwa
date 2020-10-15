const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#posts');
  I.see('Favorite restaurant still empty', '.empty-favorite-tag');

  I.amOnPage('/');
  I.seeElement('.post-item-title a');
  const firstRestaurant = locate('.post-item-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item-title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // menuju page home untuk melakukan like terlebih dahulu
  I.amOnPage('/');
  I.seeElement('.post-item-title a');
  I.click(locate('.post-item-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // menuju page favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item-title a');
  const firstLikedRestaurant = locate('.post-item-title a').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  // menuju page detail untuk melakukan unlike
  I.seeElement('.detail-title');
  const likedRestaurantTitle = await I.grabTextFrom('.detail-title');
  assert.strictEqual(firstLikedRestaurantTitle, likedRestaurantTitle);

  I.seeElement('[aria-label="unlike restaurant"]');
  I.click('[aria-label="unlike restaurant"]');

  // menuju page favorit untuk memastikan berhasil melakukan unlike
  I.amOnPage('/#/favorite');
  I.see('Favorite restaurant still empty', '.empty-favorite-tag');
});
