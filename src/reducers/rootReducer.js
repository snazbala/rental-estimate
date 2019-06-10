import { combineReducers } from 'redux';
import form from './form';
import admin from './admin';

export default combineReducers({
    form,
    admin,
});
