import React, { Component } from "react";
import { Field } from "redux-form";
import { StyleSheet } from "react-native";
import { Item, Input } from "native-base";

const textInput = props => <Input {...props} />;

class Inputs extends Component {
  render() {
    let items = [];
    {
      this.props.properties.forEach((item, index) =>
        items.push(
          <Item key={index} {...item.itemProps} style={styles.inputs}>
            <Field {...item.inputProps} component={textInput} />
          </Item>
        )
      );
    }
    console.log(items);
    return items;
  }
}

export default Inputs;

const styles = StyleSheet.create({
  inputs: {
    marginTop: 15,
    width: "100%",
    backgroundColor: "#fff",
    opacity: 0.8,
    color: "#000",
    fontSize: 18
  }
});
