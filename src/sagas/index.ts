import { SagaIterator } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_COINS, HOST_URL } from '../constants';
import {
  setCoins,
} from '../actions';

const request = axios.create({
  baseURL: HOST_URL,
  withCredentials: false,
});

export function* getCoins (): SagaIterator {
  try {
    const { data } = yield call(request.get.bind(null, 'coins'));

    yield put(setCoins(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga () {
  yield takeEvery(GET_COINS, getCoins);
}
