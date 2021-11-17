import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as ActionCreators from './actions';
import { Grid, Wrapper } from './components';
import Coin from './components/Coin';
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
    actions.getCoins();
  }, [actions]);

  return (
    <Wrapper>
      <h1>Cryptocurrency Realtime Price</h1>
      <Grid>
        { coins && coins.map((c, i) => <Coin key={ i.toString() } coin={ c } />) }
      </Grid>
    </Wrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
