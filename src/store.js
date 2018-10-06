import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import {
  routerMiddleware
} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

export default function configureStore () {
  const initialState = {};
  const enhancers = [];
  const middleware = [
    thunk,
    routerMiddleware(history)
  ];
  
  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }
  
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );
  
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
  );
  
  return store;
}


/*
import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createMiddleware from './middleware/clientMiddleware';
import { routerMiddleware } from 'react-router-redux';

export default function createStore(history, clients, data, extraMiddleware = []) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [createMiddleware(clients), reduxRouterMiddleware].concat(extraMiddleware);

  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const reducer = require('./modules/reducer');
  const store = finalCreateStore(reducer, data);


  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}
*/