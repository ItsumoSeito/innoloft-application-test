/* eslint-disable jsx-a11y/anchor-is-valid */
import { Breadcrumbs, Link } from '@mui/joy';
import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import uuid4 from 'uuid4';
import PropTypes from 'prop-types';
import { getBreadcrumbs } from '../utils/breadcrumbs';

import arrowIcon from '../../public/images/arrow_base_dark.svg';
import homeIcon from '../../public/images/home.svg';
import ROUTES from '../utils/routes';

function OsBreadcrumbs(props) {
  var { product } = props;

  var location = useLocation();

  var breadcrumbs;

  if (product) {
    breadcrumbs = getBreadcrumbs(location.pathname, product.name);
  }

  return (
    breadcrumbs && (
      <Breadcrumbs
        separator={
          <img
            src={arrowIcon}
            alt="breadcrumb separator arrow"
            className="iconSm -rotate-90"
          />
        }
      >
        {breadcrumbs.map(mapBreadcrumbs)}
      </Breadcrumbs>
    )
  );

  function mapBreadcrumbs(el, index) {
    var linkContent = el.text;
    if (index < breadcrumbs.length - 1) {
      if (el.path === ROUTES.HOME) {
        linkContent = (
          <img src={homeIcon} alt="Navigate to homepage" className="iconSm" />
        );
      }

      return (
        <RouterLink key={uuid4()} to={el.path}>
          <Link underline="hover" component="p" className="text-slate-500">
            {linkContent}
          </Link>
        </RouterLink>
      );
    }
    return (
      <Link disabled className="text-slate-700 font-semibold">
        {linkContent}
      </Link>
    );
  }
}

OsBreadcrumbs.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string]).isRequired,
  }),
};

OsBreadcrumbs.defaultProps = {
  product: undefined,
};

export default OsBreadcrumbs;
