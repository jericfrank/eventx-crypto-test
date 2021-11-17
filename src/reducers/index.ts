import {
  AnyAction, applyMiddleware, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { SET_COINS } from '../constants';
import { Coin } from '../entities';
import rootSaga from '../sagas';

export interface AppState {
  coins: Coin[] | null;
}

export interface DispatchActions {
  [key: string]: Function;
}

const initialState: AppState = {
  coins: null,
};

function reducer (
  state: AppState = initialState, action: AnyAction,
): AppState {
  switch (action.type) {
    case SET_COINS:
      return { ...state, coins: action.payload };

    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
