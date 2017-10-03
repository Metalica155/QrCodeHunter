import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducer';

const isDev = process.env.NODE_ENV !== 'production';

const middlewares = [ReduxThunk];

if (isDev) {
  middlewares.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(
    ...middlewares,
  ),
);

export default store;
