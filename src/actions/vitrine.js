export const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS';
export const FETCHED_PRODUCTS_SUCCESS = 'FETCHED_PRODUCTS_SUCCESS';
export const FETCHED_PRODUCTS_FAILURE = 'FETCHED_PRODUCTS_FAILURE';
export const BEGIN_FETCH_PRODUCTS = 'BEGIN_FETCH_PRODUCTS';

export const successOnFetchingProducts = () => ({
	type: FETCHED_PRODUCTS_SUCCESS
});

export const failureOnFetchingProducts = (e) => ({
	type: FETCHED_PRODUCTS_FAILURE,
	payload: e
});

export const beginFetchingProducts = () => ({
	type: BEGIN_FETCH_PRODUCTS
});

export const fetchedProducts = (payload) => ({
	type: FETCHED_PRODUCTS,
    payload
});

export const doFetchProducts = () => {
	return (dispatch) => {
		dispatch(beginFetchingProducts());
		fetch('/data/data.json')
			.then((res) => res.json())
			.then((res) => {
				dispatch(fetchedProducts(res));
				dispatch(successOnFetchingProducts());
			})
			.catch((e) => {
				dispatch(failureOnFetchingProducts(e.message));
			});
	};
};
