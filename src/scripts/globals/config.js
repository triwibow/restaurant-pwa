const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://dicoding-restaurant-api.el.r.appspot.com',
  BASE_IMAGE_URL: (size) => `https://dicoding-restaurant-api.el.r.appspot.com/images/${size}/`,
  DATABASE_NAME: 'restro-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  CACHE_NAME: new Date().toISOString(),
};

export default CONFIG;
