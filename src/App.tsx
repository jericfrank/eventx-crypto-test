import React from 'react';
import { Grid, Wrapper } from './components';
import Coin from './components/Coin';
import { ALT_COINS } from './constants';
import { AltCoin } from './entities';

const App = (): React.ReactElement => (
  <Wrapper>
    <h1>Cryptocurrency Realtime Price</h1>
    <Grid>
      { ALT_COINS.map((c: AltCoin, i: number) => <Coin key={ i.toString() } { ...c } />) }
    </Grid>
  </Wrapper>
);

export default App;
