import React from "react";
import { reduxForm } from "redux-form";
import { View, Text, StyleSheet } from "react-native";
import { Item, Input, Button } from "native-base";
import DeviceInfo from "react-native-device-info";

//CUSTOM IMPORTS
import SignInputs from "../../components/signInInputs/SignInInputs";
//console.log(DeviceInfo.isTablet());

const SignIn = props => (
  <View style={styles.inputsContainer}>
    <SignInputs />

    <Button style={styles.loginButton} block danger rounded>
      <Text style={styles.loginButtonText}>Login</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  inputsContainer: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: "10%"
  },
  loginButton: {
    marginTop: 15
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 18
  }
});

export default reduxForm({
  form: "SignInForm"
})(SignIn);
