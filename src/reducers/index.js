import vitrine from './vitrine';
import notifications from './notifications';
import failures from './failures';
import { combineReducers } from 'redux';

export default combineReducers({ vitrine, notifications, failures });
