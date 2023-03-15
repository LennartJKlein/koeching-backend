const bootstrap = (app) => {};

const config = {
  locales: [
    'nl',
  ]
};

const translations = {
  nl: {
    "app.components.LeftMenu.navbrand.title": "Startscherm",
    "app.components.LeftMenu.navbrand.workplace": "over Strapi",
  },
};


export default {
  bootstrap,
  config,
  translations,
};