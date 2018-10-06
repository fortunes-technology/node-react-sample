import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';
import categoryReducer from './categorys';
import articleReducer from './articles';

export default combineReducers({
  router: routerReducer,
  auth: authReducer,
  categorys: categoryReducer,
  articles: articleReducer,
});