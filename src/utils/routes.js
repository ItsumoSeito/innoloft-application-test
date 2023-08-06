export var PAGE_ROUTES = {
  OFFERS: 'offers',
  PRODUCT: 'product',
  EDIT_PRODUCT: 'edit',
  MEMBERS: 'members',
};

var ROUTES = new (function contstructRoutes() {
  this.HOME = '/';
  this.MEMBERS = `${this.HOME}${PAGE_ROUTES.MEMBERS}`;
  this.OFFERS = `${this.HOME}${PAGE_ROUTES.OFFERS}`;
  this.PRODUCT = `${this.OFFERS}/${PAGE_ROUTES.PRODUCT}/:productId`;
  this.EDIT_PRODUCT = `${this.OFFERS}/${PAGE_ROUTES.PRODUCT}/${PAGE_ROUTES.EDIT_PRODUCT}/:productId`;
})();

export var CLEAN_ROUTES = new (function contstructCleanRoutes() {
  this.HOME = '/';
  this.MEMBERS = `${this.HOME}${PAGE_ROUTES.MEMBERS}`;
  this.OFFERS = `${this.HOME}${PAGE_ROUTES.OFFERS}`;
  this.PRODUCT = `${this.OFFERS}/${PAGE_ROUTES.PRODUCT}`;
  this.EDIT_PRODUCT = `${this.OFFERS}/${PAGE_ROUTES.PRODUCT}/${PAGE_ROUTES.EDIT_PRODUCT}`;
})();

export default ROUTES;
