export type Code = 'btc-usd' | 'eth-usd' | 'ltc-usd' | 'xmr-usd' |
'xrp-usd' | 'doge-usd' | 'dash-usd' | 'maid-usd' | 'lsk-usd' | 'sjcx-usd';

export interface AltCoin {
  name: string;
  code: Code;
};

export interface Coin {
  error: string;
  success: boolean;
  ticker: {
    base: string;
    change: number;
    price: number;
    target: string;
    volume: number;
  },
  timestamp: number;
}
