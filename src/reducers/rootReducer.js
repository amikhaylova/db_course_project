import { combineReducers } from 'redux'
import { clientReducer } from './clientReducer.js'
import { reducer as formReducer } from 'redux-form';
import {reducer as notifications} from 'react-notification-system-redux';

export const rootReducer = combineReducers({
    client: clientReducer,
    form: formReducer,
    notifications: notifications,
});