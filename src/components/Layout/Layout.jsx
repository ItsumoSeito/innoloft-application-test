import { Input } from '@mui/joy';
import React from 'react';
import { Outlet } from 'react-router-dom';

import logo from '../../../public/images/logo.svg';
import searchIcon from '../../../public/images/search.svg';

import Menubar from './Menubar';
import Sidebar from './Sidebar';

function Layout() {
  function handleSearch() {}

  return (
    <div className="bg-slate-100 w-full h-full flex flex-col justify-start items-center">
      <div className="basis-[6%] bg-main-800 w-full flex items-start justify-center">
        <div className="h-full flex justify-start align-center w-10/12">
          <div className="basis-1/5 mr-4 h-full flex justify-start align-center">
            <img
              src={logo}
              alt="Innoloft logo"
              className="w-1/2 brightness-0 invert"
            />
          </div>
          <div className="grow h-full flex justify-between items-center">
            <Input
              placeholder="Enter interests, keyword, company name, etc."
              variant="outlined"
              size="sm"
              className="h-3/5 w-1/2"
              endDecorator={
                <div
                  role="button"
                  tabIndex="0"
                  onClick={handleSearch}
                  onKeyDown={handleSearch}
                >
                  <img src={searchIcon} alt="Search" className="iconSm" />
                </div>
              }
            />
            <Menubar />
          </div>
        </div>
      </div>
      <div className="w-full px-[8.3333%] basis-[94%] flex items-start justify-center overflow-y-scroll gap-4 pb-10">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
