import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Button } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//CUSTOM IMPORTS
import SignIn from "./src/screens/SignIn/SignIn";

import backgroundLogin from "./src/assets/background-image.jpg";

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
          resizeMode="cover"
          style={styles.container}>
          <Ionicons
            style={styles.logo}
            name="ios-contact"
            size={120}
            color="#fff"
          />
          <SignIn />

          <View style={styles.socialNetworksContainer}>
            <View>
              <Text style={styles.socialNetworks}>
                Login With Social Network
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row"
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#3b5998",
                  width: 45,
                  height: 45,
                  borderRadius: 90,
                  padding: 5,
                  alignItems: "center",
                  justifyContent: "flex-end",
                  marginLeft: 10,
                  marginRight: 10
                }}>
                <FontAwesome name={"facebook-f"} size={30} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  width: 45,
                  height: 45,
                  borderRadius: 90,
                  padding: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                  marginRight: 10
                }}>
                <FontAwesome name={"github-alt"} size={30} color="#333" />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#DB4437",
                  width: 45,
                  height: 45,
                  borderRadius: 90,
                  padding: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                  marginRight: 10
                }}>
                <FontAwesome name={"google"} size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "white",
                height: 2,
                flex: 1,
                alignSelf: "center"
              }}
            />
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                paddingHorizontal: 5,
                fontSize: 24
              }}>
              OR
            </Text>
            <View
              style={{
                backgroundColor: "white",
                height: 2,
                flex: 1,
                alignSelf: "center"
              }}
            />
          </View>
          <Button
            style={{ marginTop: 15, paddingHorizontal: 5 }}
            block
            transparent>
            <Text
              style={{
                fontSize: 24,
                color: "#FFF"
              }}>
              Sign Up!
            </Text>
          </Button>
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
  },

  socialNetworksContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    flexDirection: "column",
    alignItems: "center"
  },

  socialNetworks: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 15
  }
});
