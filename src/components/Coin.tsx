import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Card, EmptyCard, Loader, Row } from '.';
import { Code } from '../entities';
import * as ActionCreators from '../actions';
import { AppState } from '../reducers';
import Figure from './Figure';

interface CoinStateProps {
  name: string;
  code: Code;
}

const mapStateToProps = (state: AppState) => ({
  coins: state.coins,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

type CoinProps = CoinStateProps & ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>;

// Prices are updated every 30 seconds
const INTERVAL_SECONDS = 30;

const Coin = ({ coins, actions, name, code }: CoinProps): React.ReactElement => {
  useEffect(() => {
    if (!Object.keys(coins).length) {
      actions.getCoins(code);
    }

    const interval = setInterval((): void => {
      actions.getCoins(code);
    }, 3000 * INTERVAL_SECONDS);

    return () => {
      clearInterval(interval);
    };
  }, [actions, coins, code]);

  if (!coins || !coins[code]) {
    return (
      <EmptyCard>
        <Loader />
      </EmptyCard>
    );
  }

  if (!coins[code].success) {
    return (
      <EmptyCard>
        <h1>{ name }</h1>
        <p>{ coins[code].error }</p>
      </EmptyCard>
    );
  }

  const coin = coins[code].ticker;

  return (
    <Card>
      <h1>{ name }</h1>
      <h3>${ coin.price }</h3>
      <Row>
        <div>
          <h4>volume:</h4>
          <p>{ coin.volume }</p>
        </div>
        <div>
          <h4>change:</h4>
          <Figure num={ coin.change } />
        </div>
      </Row>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Coin);
