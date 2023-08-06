/* eslint-disable no-param-reassign */
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import uuid4 from 'uuid4';

import lindaProfile from '../../public/images/linda_profile.png';
import davidProfile from '../../public/images/david_profile.png';
import phillipProfile from '../../public/images/phillip_profile.png';

var notificationsTestData = [
  {
    id: uuid4(),
    iconUrl: lindaProfile,
    text: 'Linda has mentioned you in a post',
    read: false,
  },
  {
    id: uuid4(),
    iconUrl: phillipProfile,
    text: 'Our connection system has found some interesting business with Phillip',
    read: false,
  },
  {
    id: uuid4(),
    iconUrl: davidProfile,
    text: 'David has just created a new innovation project',
    read: true,
  },
];

var initialState = {
  language: 'DE',
  notifications: notificationsTestData,
};

var setLanguage = createAction('setLanguage');
var markAsRead = createAction('markAsRead');

var reducer = createReducer(initialState, function builddReducer(builder) {
  builder.addCase(setLanguage, function storeSetLanguage(state, action) {
    state.language = action.payload;
  });
  builder.addCase(markAsRead, function storeMarkAsRead(state, action) {
    state.notifications = state.notifications.map(function mapAndMarkAsRead(
      notification,
    ) {
      return notification.id === action.payload
        ? { ...notification, read: true }
        : notification;
    });
  });
});

var store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
export { setLanguage, markAsRead };
