import {combineReducers} from 'redux';

import user from './userReducers';
import chat from './chatReducers';


const rootReducer = combineReducers({
    user,
    chat
})

export default rootReducer;