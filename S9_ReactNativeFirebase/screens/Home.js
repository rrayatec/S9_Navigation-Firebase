// screens/Home.js

import React, { Component } from "react";
import { Button, View, Text, Alert } from "react-native";

class Home extends Component {
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>

        <Button
          title="Login with Facebook"
          onPress={() => this.props.navigation.navigate("Facebook")}
        />

        <Button
          title="Firebase DB"
          onPress={() => this.props.navigation.navigate("Firebase_page")}
        />
      </View>
    );
  }
}

export default Home;
