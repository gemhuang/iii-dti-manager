import {
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'src/reducer';

const middleware = applyMiddleware(thunk);

function getStore() {
  const store = createStore(
    rootReducer,
    middleware,
  );
  return store;
}

export default getStore;
