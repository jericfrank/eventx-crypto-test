import { AltCoin } from '../entities';

export const GET_COINS = 'GET_COINS';
export const SET_COIN = 'SET_COIN';

export const ALT_COINS: AltCoin[] = [
  { name: 'Bitcoin', code: 'btc-usd' },
  { name: 'Ether', code: 'eth-usd' },
  { name: 'Litecoin', code: 'ltc-usd' },
  { name: 'Monero', code: 'xmr-usd' },
  { name: 'Ripple', code: 'xrp-usd' },
  { name: 'Dogecoin', code: 'doge-usd' },
  { name: 'Dash', code: 'dash-usd' },
  { name: 'MaidSafeeCoin', code: 'maid-usd' },
  { name: 'Lisk', code: 'lsk-usd' },
  { name: 'Storjcoin X', code: 'sjcx-usd' },
];
