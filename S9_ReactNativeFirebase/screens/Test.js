// screens/Test.js

import React, { Component } from "react";
import { Button, View, Text, Alert } from "react-native";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      done: "",
    };
  }

  //Funciones globales

  render() {
    //Funciones locales

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Test Screen</Text>
      </View>
    );
  }
}

export default Test;
