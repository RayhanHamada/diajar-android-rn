import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Text} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';

import funfacts from './../models/funfact.js';
export default SplashScreen = props => {
  //   setTimeout(() => props.navigation.navigate('LoginPage'), 10000);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('./../assets/logo1.png')}
        style={styles.logo}
        resizeMode="center"
      />
      <Text h1 style={styles.diajarText}>
        Diajar ID
      </Text>
      <ActivityIndicator size="large" color="white" />
      <Text
      style={styles.facts}
      >{funfacts[Math.floor(Math.random() * funfacts.length)]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#002663',
    height: '100%',
    width: 'auto',
    alignItems: 'center',
    paddingTop: '30%',
  },
  logo: {
    marginBottom: '4%',
    width: 150,
    height: 150,
  },
  diajarText: {
    color: 'white',
    marginBottom: '40%',
  },
  facts: {
      color: "white",
      marginTop: "10%"
  }
});
