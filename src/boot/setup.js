import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import ShoppingApp from '../App';

const { store } = configureStore();

const Setup = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<ShoppingApp />
			</Provider>
		</React.StrictMode>
	);
};

export default Setup;
