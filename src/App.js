import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { doFetchProducts } from './actions/vitrine';
import { createSelector } from 'reselect';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

const vitrineNotificationSelector = (state) => {
	return state.notifications.vitrine;
};

const vitrineNotificationMessagesSelector = (state) => {
	return state.notifications.vitrine.messages;
};

const hasNewNotificationOnVitrineSelector = (state) => {
	return Boolean(state.notifications.vitrine.messages.length > 0);
};

const lastVitrineNotificationSelector = createSelector(
	vitrineNotificationSelector,
	hasNewNotificationOnVitrineSelector,
	vitrineNotificationMessagesSelector,
	(_, hasNewMsg, messages) => {
		const { length } = messages;
		if (!length || !hasNewMsg) {
			return null;
		}

		return messages[length - 1];
	}
);

const ShoppingApp = () => {
	const dispatch = useDispatch();
	const message = useSelector(lastVitrineNotificationSelector);

	useEffect(() => {
		if (message) {
			toast(message.message);
			console.log('!!');
		}
	}, [message]);

	return (
		<div className="App">
			<h1>Shopping</h1>
			<button onClick={() => dispatch(doFetchProducts())}>LOAD</button>
			<ToastContainer />
		</div>
	);
};

export default ShoppingApp;
