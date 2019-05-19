import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SocialNetworksLogin = props => {
  return (
    <View style={styles.socialNetworksContainer}>
      <View>
        <Text style={styles.socialNetworks}>Login With Social Network</Text>
      </View>
      <View
        style={{
          flexDirection: "row"
        }}>
        <TouchableOpacity
          style={{
            ...styles.socialNetworksButton,
            backgroundColor: "#3b5998",
            justifyContent: "flex-end"
          }}>
          <FontAwesome name={"facebook-f"} size={30} color='#fff' />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.socialNetworksButton,
            backgroundColor: "#fff"
          }}>
          <FontAwesome name={"github-alt"} size={30} color='#333' />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.socialNetworksButton,
            backgroundColor: "#DB4437"
          }}>
          <FontAwesome name={"google"} size={30} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },

  socialNetworksButton: {
    width: 45,
    height: 45,
    borderRadius: 90,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10
  }
});

export default SocialNetworksLogin;
