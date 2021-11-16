import {
  AnyAction, applyMiddleware, compose, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SET_COIN } from '../constants';
import { Coin } from '../entities';
import rootSaga from '../sagas';

export interface AppState {
  coins: {[key: string]: Coin};
}

export interface DispatchActions {
  [key: string]: Function;
}

const initialState: AppState = {
  coins: {},
};

function reducer (
  state: AppState = initialState, action: AnyAction,
): AppState {
  switch (action.type) {
    case SET_COIN:
      const payload = action.payload;
      return { ...state, coins: {...state.coins, [payload.code]: payload.data} };

    default:
      return state;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
