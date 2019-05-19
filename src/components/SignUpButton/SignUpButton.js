import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Button } from "native-base";

const SignUpButton = props => {
  return (
    <View style={styles.signUpButtonContainer}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.whiteLine} />
        <Text style={styles.lineMessage}>OR</Text>
        <View style={styles.whiteLine} />
      </View>
      <Button style={styles.signUpButton} block primary rounded>
        <Text style={styles.signUpButtonText}>Sign Up!</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpButtonContainer: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 30
  },

  whiteLine: {
    backgroundColor: "white",
    height: 2,
    flex: 1,
    alignSelf: "center"
  },
  lineMessage: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 5,
    fontSize: 24
  },
  signUpButton: { marginTop: 15 },
  signUpButtonText: { fontSize: 24, color: "#FFF" }
});

export default SignUpButton;
