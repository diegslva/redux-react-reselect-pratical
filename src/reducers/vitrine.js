import { FETCHED_PRODUCTS } from '../actions/vitrine';

const initialState = {
	products: []
};

export default (state = initialState, action) => {
	if (action.type === FETCHED_PRODUCTS) {
		return { ...state, products: [...action.payload] };
	}
	return state;
};
