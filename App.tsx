/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/index';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';

import LoginContainer from './src/containers/LoginContainer';
import {
  SafeAreaView,
} from 'react-native';

import { HOME, LOGIN, REGISTER, USERMANAGEMENT } from './src/containers/index'
import RegisterContainer from './src/containers/RegisterContainer';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { composeWithDevTools } from 'redux-devtools-extension';
import ShopContainer from './src/containers/UserContainer';
import UserManagementContainer from './src/containers/UserContainer';


declare const global: { HermesInternal: null | {} };
//Middleware
const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers =
//   typeof window === 'object' && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
//     ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
//     })
//     : compose;
let store = createStore(allReducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const withReduxProvider = (C: React.FC) => (props: any) => (
  <Provider store={store}>
    <C {...props} />
  </Provider>
);

const Screens = new Map<string, React.FC<any>>();

// Screens.set(HOME, HomeScreen);
Screens.set(LOGIN, LoginContainer);
Screens.set(REGISTER, RegisterContainer);
Screens.set(USERMANAGEMENT, UserManagementContainer);

// Register screens
Screens.forEach((C, key) => {
  Navigation.registerComponent(
    key,
    () => withReduxProvider(C),
    () => C,
  );
});

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: USERMANAGEMENT,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
}