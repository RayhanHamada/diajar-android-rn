import React, {Fragment, Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Button} from 'react-native-elements';

import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import SplashScreen from './pages/SplashScreen.js';

const MainNavigator = createStackNavigator(
  {
    // SplashScreen: {
    //   screen: SplashScreen,
    // },
    LoginPage: {
      screen: LoginPage,
    },
    RegisterPage: {
      screen: RegisterPage,
    },
  },
  {
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);
export default App;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#002663',
    color: 'white',
    flex: 1,
    // justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});
