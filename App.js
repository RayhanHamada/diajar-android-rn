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
    <View style={styles.scrollView}>
      <Text style={{color: "white"}}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#002663',
    color: "white",
    flex: 1,
    justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});
