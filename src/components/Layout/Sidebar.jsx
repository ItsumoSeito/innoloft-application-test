import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import UserInfo from '../UserInfo';

import userProfile from '../../../public/images/user.png';
import homeIcon from '../../../public/images/home.svg';
import membersIcon from '../../../public/images/members.svg';
import networkIcon from '../../../public/images/network.svg';
import arrowIcon from '../../../public/images/arrow_base.svg';
import productIcon from '../../../public/images/product.svg';

function Sidebar() {
  function toggleOrganizations() {}

  return (
    <div className="basis-1/5 flex flex-col justify-start items-start pt-6 gap-6 pl-3 text-slate-700">
      <UserInfo
        name="Sven Pietsch"
        company="Innoloft GmbH"
        imageUrl={userProfile}
      />
      <nav id="sidebarNavigation">
        <ul className="flex flex-col justify-start items-start gap-3 w-full">
          <li>
            <span className="sidebarNavItem">
              <img
                src={homeIcon}
                alt="Navigate to homepage"
                className="iconMd"
              />
              <NavLink to={ROUTES.HOME}>Home</NavLink>
            </span>
          </li>
          <li>
            <span className="sidebarNavItem">
              <img
                src={membersIcon}
                alt="Navigate to members"
                className="iconMd"
              />
              <NavLink to={ROUTES.MEMBERS}>Members</NavLink>
            </span>
          </li>
          <li>
            <span
              role="button"
              className="flex justify-between items-center"
              type="button"
              onClick={toggleOrganizations}
              onKeyDown={toggleOrganizations}
              tabIndex="-1"
            >
              <div className="sidebarNavItem">
                <img
                  src={networkIcon}
                  alt="Expand or retract organizations"
                  className="iconMd"
                />
                <p>Organizations</p>
              </div>
              <img src={arrowIcon} alt="Toggle button" className="iconSm" />
            </span>
          </li>
          <li>
            <span className="sidebarNavItem">
              <img
                src={productIcon}
                alt="Navigate to featured product"
                className="iconMd"
              />
              <NavLink to="/offers/product/6781">Featured product</NavLink>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
