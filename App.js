import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//CUSTOM IMPORTS
import backgroundLogin from "./src/assets/background-image.jpg";
import SignIn from "./src/screens/SignIn/SignIn";
import SocialNetworksLogin from "./src/components/SocialNetworksLogin/SocialNetworksLogin";
import SignUpButton from "./src/components/SignUpButton/SignUpButton";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled>
        <ImageBackground
          source={backgroundLogin}
          resizeMode='cover'
          style={styles.container}>
          <Ionicons
            style={styles.logo}
            name='ios-contact'
            size={120}
            color='#fff'
          />
          <SignIn />
          <SocialNetworksLogin />
          <SignUpButton />
        </ImageBackground>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },

  logo: {
    marginTop: 30
  }
});
