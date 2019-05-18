import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Inputs from '../inputs/Inputs';

class SignInInputs extends Component {
  render() {
    return (
      <View>
        <Inputs
          properties={[
            {
              inputProps: {
                placeholder: 'User Email...'
              },
              itemProps: {
                rounded: 'true'
              }
            },
            {
              inputProps: {
                placeholder: 'User Password...',
                secureTextEntry: 'true'
              },
              itemProps: {
                rounded: 'true'
              }
            }
          ]}
        />
      </View>
    );
  }
}

export default SignInInputs;
