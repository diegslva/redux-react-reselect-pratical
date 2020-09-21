import { FETCHED_PRODUCTS_FAILURE } from '../actions/vitrine';

const initialState = {
	vitrine: {
		counter: 0,
		messages: [],
		lastMessage: null,
		lastErrorMessage: null
	},
	total: 0
};

export default (state = initialState, action) => {
	if (action.type === FETCHED_PRODUCTS_FAILURE) {
		const { length } = state.vitrine.messages;
		const lastErrorMessage = action.payload;
		const total = state.total + 1;
		const messages = [
			...state.vitrine.messages,
			{
				message: 'Falha ao carregar produtos na vitrine',
				error: action.payload
			}
		];
		const lastMessage = length > 0 ? state.vitrine.messages[length - 1] : null;
		return {
			...state,
			total,
			vitrine: {
				counter: state.vitrine.counter + 1,
				lastMessage: lastMessage,
				messages: [...messages],
				lastErrorMessage: lastErrorMessage
			}
		};
	}
	return state;
};
