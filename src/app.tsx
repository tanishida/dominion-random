import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom';
import {RootState} from './duck/types';
import {Dominion} from './page/dominion/dominion';

const AppComponent: React.FC<RouteComponentProps> = () => {
  const selectIsLoading = (state: RootState) => state.app.isLoading;
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  return (
    <div>
      <Dominion />
    </div>
  );
};

export const App = withRouter(AppComponent);