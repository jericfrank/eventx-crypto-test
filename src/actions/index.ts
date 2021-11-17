import { createAction } from '@reduxjs/toolkit';
import { GET_COINS, SET_COINS } from '../constants';
import { Coin } from '../entities';

export const getCoins = createAction(GET_COINS);
export const setCoins = createAction<Coin>(SET_COINS);
