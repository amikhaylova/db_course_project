import { combineReducers } from 'redux'
import { clientReducer } from './clientReducer.js'
import { reducer as formReducer } from 'redux-form';
import {reducer as notifications} from 'react-notification-system-redux';
import {orderReducer} from "./orderReducer";

export const rootReducer = combineReducers({
    client: clientReducer,
    order: orderReducer,
    form: formReducer,
    notifications: notifications,
});