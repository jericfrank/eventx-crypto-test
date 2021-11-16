import { createAction } from '@reduxjs/toolkit';
import { GET_COINS, SET_COIN } from '../constants';
import { Code, Coin } from '../entities';

interface CoinPayload {
  code: Code;
  data: Coin;
}

export const getCoins = createAction<Code>(GET_COINS);
export const setCoin = createAction<CoinPayload>(SET_COIN);
