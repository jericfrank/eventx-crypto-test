import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_COINS } from '../constants';
import {
  setCoin,
  getCoins as getCoinActions,
} from '../actions';

const request = axios.create({
  baseURL: 'https://api.cryptonator.com/api/',
});

export function* getCoins (actions: ReturnType<typeof getCoinActions>): SagaIterator {
  try {
    const code = actions.payload;
    const { data } = yield call(request.get.bind(null, `ticker/${ code }`));

    yield put(setCoin({ code, data }));
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga () {
  yield takeEvery(GET_COINS, getCoins);
}
