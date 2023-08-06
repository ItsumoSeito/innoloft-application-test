import { useState, useEffect } from 'react';

import GLOBALS from '../utils/globals';

function useFetchProduct(productId) {
  var [product, setProduct] = useState();
  var [isPending, setIsPending] = useState(true);
  var [error, setError] = useState();

  useEffect(
    function executeFetch() {
      fetch(`${GLOBALS.API_URL}/product/${productId}/`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error while fetching the product. Response with code ${response.status}`,
            );
          }
          return response.json();
        })
        .then((resData) => {
          setIsPending(false);
          setProduct(resData);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err);
        });
    },
    [productId],
  );

  return { product, isPending, error };
}

export default useFetchProduct;
