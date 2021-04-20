// screens/Home.js

import React, { Component } from "react";
import { Button, View, Text, Alert } from "react-native";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      done: "",
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>

        <Button
          title="Go to Blog"
          onPress={() => this.props.navigation.navigate("Blog")}
        />
        <Button
          title="Go to Blog Details"
          onPress={() => this.props.navigation.navigate("BlogDetails")}
        />

        <Button
          title="Test"
          onPress={() => this.props.navigation.navigate("MyTest")}
        />
        
      </View>
    );
  }
}

export default Home;
