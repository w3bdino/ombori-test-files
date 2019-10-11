import { combineReducers } from 'redux';
import userlistReducer from './userReducers';

const rootReducer = combineReducers({
  userlist: userlistReducer,
});

export default rootReducer;  
  