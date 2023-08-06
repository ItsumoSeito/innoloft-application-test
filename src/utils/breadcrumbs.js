import _ from 'lodash';
import { CLEAN_ROUTES, PAGE_ROUTES } from './routes';

export function getBreadcrumbs(currentUrl, productTitle) {
  var matchingRoutes = [];

  getMatchingRoutes();
  return getBreadcrumbElements();

  function getBreadcrumbElements() {
    var routeElements = currentUrl.split('/');
    var index = -1;

    routeElements = routeElements.map(function hydrateRouteElements(el) {
      index += 1;
      if (Number(el)) {
        index -= 1;
        return null;
      }

      switch (el) {
        case PAGE_ROUTES.EDIT_PRODUCT:
          index -= 1;
          return null;
        case PAGE_ROUTES.PRODUCT:
          return {
            text: productTitle,
            path: matchingRoutes[index],
          };
        default:
          return { text: _.capitalize(el), path: matchingRoutes[index] };
      }
    });

    return routeElements.filter(function filterNullValues(el) {
      return el !== null;
    });
  }

  function getMatchingRoutes() {
    Object.values(CLEAN_ROUTES).forEach(function matchRoutes(route) {
      if (currentUrl.match(RegExp(route))) {
        matchingRoutes.push(route);
      }

      matchingRoutes = matchingRoutes.sort(function sortByLength(a, b) {
        return a.length <= b.length ? 0 : 1;
      });
    });
  }
}

export default {
  getBreadcrumbs,
};
