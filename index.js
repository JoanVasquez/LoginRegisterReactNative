/**
 * @format
 */

import React from "react";

import { Provider } from "react-redux";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import Store from "./src/store/Store";

const connectedRedux = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => connectedRedux);
