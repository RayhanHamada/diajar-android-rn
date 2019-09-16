/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'tomato',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});
