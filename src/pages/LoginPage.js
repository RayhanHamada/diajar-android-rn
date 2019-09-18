import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  ListView,
  ScrollView,
  TextIn,
} from 'react-native';

import {Text, Input, Button} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default LoginPage = props => {
  const [loginState, setLoginState] = useState({
    userEmail: '',
    userPassword: '',
  });

  const emailInputRef = React.createRef();
  const passInputRef = React.createRef();

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={-220}>
      <View style={styles.mainContainer}>
        <Image
          source={require('./../assets/logo1.png')}
          style={{width: 120, height: 120}}
          resizeMode="center"
        />
        <View style={styles.inputs}>
          <Input
            ref={emailInputRef}
            placeholder="Masukkan email anda"
            placeholderTextColor="#a6aba6"
            inputStyle={{color: 'white'}}
            leftIcon={
              <Icon
                type="material-community"
                name="account-outline"
                color="white"
              />
            }
            onChangeText={val => {
              setLoginState({userEmail: val});
            }}
          />
          <Input
            ref={passInputRef}
            placeholder="Masukkan password anda"
            placeholderTextColor="#a6aba6"
            inputStyle={{color: 'white'}}
            leftIcon={
              <Icon
                type="material-community"
                name="lock-outline"
                color="white"
              />
            }
            onChangeText={val => {
              setLoginState({userPassword: val});
            }}
          />
          <Button
            type="outline"
            title="Login"
            containerStyle={styles.loginContainer}
            buttonStyle={styles.loginButton}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#002663',
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
  },
  inputs: {
    marginTop: '15%',
    width: '95%',
    flex: 1,
    // height: '40%',
  },
  loginContainer: {
    marginTop: '5%',
  },
  loginButton: {
    borderRadius: 20,
  },
});
