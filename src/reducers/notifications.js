import { FETCHED_PRODUCTS_SUCCESS } from '../actions/vitrine';

const initialState = {
	vitrine: {
		messages: [],
		lastMessage: null
	}
};

export default (state = initialState, action) => {
	if (action.type === FETCHED_PRODUCTS_SUCCESS) {
		const { length } = state.vitrine.messages;
		const lastMessage = length > 0 ? state.vitrine.messages[length - 1] : null;
		return {
			...state,
			vitrine: {
				...state.vitrine,
				lastMessage,
				messages: [
					...state.vitrine.messages,
					{ message: 'Produtos carregados com sucesso.' }
				]
			}
		};
	}

	return state;
};
