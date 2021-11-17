import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import io from 'socket.io-client';

import * as ActionCreators from './actions';
import { Grid, Wrapper } from './components';
import CoinComponent from './components/Coin';
import { HOST_URL } from './constants';
import { Coin } from './entities';
import { AppState } from './reducers';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

const mapStateToProps = (state: AppState) => ({
  coins: state.coins,
});

type AppProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const App = ({ actions, coins }: AppProps): React.ReactElement => {
  useEffect(() => {
    const socket = io(`${ HOST_URL }/ws`);
    socket.on('UPDATE_COINS', (data: Coin[]): void => {
      actions.setCoins(data);
    });
  }, [actions]);

  useEffect(() => {
    actions.getCoins();
  }, [actions]);

  return (
    <Wrapper>
      <h1>Cryptocurrency Realtime Price</h1>
      <Grid>
        { coins.map((c, i) => <CoinComponent key={ i.toString() } coin={ c } />) }
      </Grid>
    </Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
