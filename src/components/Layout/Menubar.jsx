import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Menu, MenuItem } from '@mui/joy';
import { setLanguage, markAsRead } from '../../store/store';

import commentsIcon from '../../../public/images/comments.svg';
import arrowIcon from '../../../public/images/arrow_base.svg';
import bellIcon from '../../../public/images/bell.svg';
import profilePic from '../../../public/images/user.png';
import settingsIcon from '../../../public/images/settings.svg';
import logoutIcon from '../../../public/images/logout.svg';
import bellIconBlue from '../../../public/images/bell_dark_blue.svg';

function Menubar() {
  var dispatch = useDispatch();
  var language = useSelector((state) => state.language);
  var notifications = useSelector((state) => state.notifications);

  var [isCommentsOpen, setIsCommentsOpen] = useState(false);
  var [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  var [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  var [isUserOpen, setIsUserOpen] = useState(false);
  var [menubarAnchors, setMenubarAnchors] = useState({
    comments: undefined,
    language: undefined,
    notifications: undefined,
    user: undefined,
  });

  function toggleComments() {
    setIsCommentsOpen(!isCommentsOpen);
  }

  function toggleLanguage() {
    setIsLanguagesOpen(!isLanguagesOpen);
  }

  function toggleNotifications() {
    setIsNotificationsOpen(!isNotificationsOpen);
  }

  function toggleUserMenu() {
    setIsUserOpen(!isUserOpen);
  }

  function isLanguageSelected(itemLang) {
    return itemLang === language;
  }

  function selectLanguage(ev) {
    dispatch({ type: setLanguage, payload: ev.target.innerText });
  }

  function openNotification(id) {
    dispatch({ type: markAsRead, payload: id });
  }

  useEffect(function setAnchors() {
    setMenubarAnchors({
      // eslint-disable-next-line no-undef
      comments: document.getElementById('commentsButton'),
      // eslint-disable-next-line no-undef
      language: document.getElementById('languageButton'),
      // eslint-disable-next-line no-undef
      notifications: document.getElementById('notificationsButton'),
      // eslint-disable-next-line no-undef
      user: document.getElementById('userButton'),
    });
  }, []);

  return (
    <div role="menubar" className="flex justify-end items-center gap-3">
      <button
        type="button"
        onClick={toggleComments}
        tabIndex="0"
        id="commentsButton"
        aria-controls="commentsMenu"
      >
        <img src={commentsIcon} alt="Toggle comments" className="iconMd" />
      </button>
      <Menu
        open={isCommentsOpen}
        anchorEl={menubarAnchors.comments}
        id="commentsMenu"
      >
        <MenuItem>Unread comments</MenuItem>
        <MenuItem>All comments</MenuItem>
      </Menu>
      <button
        className="flex justify-center items-center"
        type="button"
        onClick={toggleLanguage}
        tabIndex="-1"
        id="languageButton"
        aria-controls="languageMenu"
      >
        <span className="text-lg text-slate-300">{language}</span>
        <img
          src={arrowIcon}
          alt="Toggle language selection"
          className="iconMd"
        />
      </button>
      <Menu
        open={isLanguagesOpen}
        anchorEl={menubarAnchors.language}
        size="lg"
        id="languageMenu"
      >
        <MenuItem selected={isLanguageSelected('EN')} onClick={selectLanguage}>
          EN
        </MenuItem>
        <MenuItem selected={isLanguageSelected('DE')} onClick={selectLanguage}>
          DE
        </MenuItem>
        <MenuItem selected={isLanguageSelected('ES')} onClick={selectLanguage}>
          ES
        </MenuItem>
        <MenuItem selected={isLanguageSelected('FR')} onClick={selectLanguage}>
          FR
        </MenuItem>
      </Menu>
      <button
        type="button"
        onClick={toggleNotifications}
        tabIndex="-1"
        id="notificationsButton"
        aria-controls="notificationsMenu"
      >
        <img src={bellIcon} alt="Toggle notifications" className="iconSm" />
      </button>
      <Menu
        open={isNotificationsOpen}
        anchorEl={menubarAnchors.notifications}
        id="notificationsMenu"
      >
        {notifications.map(function mapNotificationitems(notification) {
          return (
            <MenuItem
              selected={!notification.read}
              onClick={openNotification.bind(null, notification.id)}
            >
              <span className="flex justify-between items-center gap-4">
                <img
                  src={notification.iconUrl}
                  alt="Notification icon"
                  className="rounded-full w-12 h-12"
                />
                <p>{notification.text}</p>
              </span>
            </MenuItem>
          );
        })}
      </Menu>
      <button
        className="flex justify-center items-center"
        type="button"
        onClick={toggleUserMenu}
        tabIndex="-1"
        id="userButton"
        aria-controls="userMenu"
      >
        <img
          src={profilePic}
          alt="Toggle user menu"
          className="w-8 h-8 rounded-full"
        />
        <img
          src={arrowIcon}
          alt="Toggle language selection"
          className="iconMd"
        />
      </button>
      <Menu
        open={isUserOpen}
        anchorEl={menubarAnchors.user}
        size="lg"
        id="userMenu"
      >
        <MenuItem>
          <span className="flex justify-between items-center gap-4">
            <img src={settingsIcon} alt="Settings icon" className="iconSm" />
            <p>Settings</p>
          </span>
        </MenuItem>
        <MenuItem>
          <span className="flex justify-between items-center gap-4">
            <img
              src={bellIconBlue}
              alt="Notifications settings icon"
              className="iconSm"
            />
            <p>Notification settings</p>
          </span>
        </MenuItem>
        <MenuItem>
          <span className="flex justify-between items-center gap-4">
            <img src={logoutIcon} alt="Logout icon" className="iconSm" />
            <p>Logout</p>
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Menubar;
