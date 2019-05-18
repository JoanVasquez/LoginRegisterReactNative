import React, { Component } from "react";
import { Text, View } from "react-native";
import Inputs from "../inputs/Inputs";

class SignInInputs extends Component {
  render() {
    return (
      <Inputs
        properties={[
          {
            inputProps: {
              name: "email",
              placeholder: "User Email..."
            },
            itemProps: {
              rounded: "true"
            }
          },
          {
            inputProps: {
              name: "password",
              placeholder: "User Password..."
            },
            itemProps: {
              rounded: "true"
            }
          }
        ]}
      />
    );
  }
}

export default SignInInputs;
