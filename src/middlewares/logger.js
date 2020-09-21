export default ({ getState }) => {
	return (next) => {
		return (action) => {
			const logger = window.console.log;
			const prevState = getState();
            const {type} = next(action);

            const nextState = getState();

			logger(`prevState: `, prevState);
            logger(`action: ${type}`);
			logger(`nextState: `, nextState);
		};
	};
};
