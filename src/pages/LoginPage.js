import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {Text, Input} from 'react-native-elements';

export default LoginPage = props => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('./../assets/logo1.png')}
        style={{width: 100, height: 100}}
      />
      <View style={styles.inputs}>
        <Input placeholder="Enter Your Text" placeholderTextColor="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#002663',
    alignItems: 'center',
    paddingTop: '20%',
  },
  inputs: {
    marginTop: '15%',
    width: '86%',
  },
});
