import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, Input, Button } from 'native-base';
import DeviceInfo from 'react-native-device-info';

//CUSTOM IMPORTS
//console.log(DeviceInfo.isTablet());

const SignIn = props => (
  <View style={styles.inputsContainer}>
    <Item style={styles.inputs} rounded>
      <Input placeholder='User Email' />
    </Item>
    <Item style={styles.inputs} rounded>
      <Input placeholder='User Password' secureTextEntry={true} />
    </Item>

    <Button style={styles.loginButton} block danger rounded>
      <Text style={styles.loginButtonText}>Login</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: 'column',
    paddingHorizontal: '10%'
  },
  inputs: {
    marginTop: 15,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.8,
    color: '#000',
    fontSize: 18
  },

  loginButton: {
    marginTop: 15
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default SignIn;
