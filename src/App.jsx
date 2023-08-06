import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/joy';
import store from './store/store';
import ROUTES from './utils/routes';

import Layout from './components/Layout/Layout';
import Homepage from './components/pages/Homepage';
import ProductPage from './components/pages/ProductPage';
import EditProductPage from './components/pages/EditProductPage';

export var router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Homepage /> },
      { path: ROUTES.PRODUCT, element: <ProductPage /> },
      {
        path: ROUTES.EDIT_PRODUCT,
        element: <EditProductPage />,
      },
    ],
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <RouterProvider router={router} />
        </StyledEngineProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
