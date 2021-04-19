// screens/Home.js

import React, { Component } from "react";
import { Button, View, Text, Alert } from "react-native";
import Firebase from "../database/firebase";
const db = Firebase.database();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todoItem: "",
      done: "",
    };
  }

  createValue = () => {
    db.ref("/todos").push({
      done: false,
      //todoItem: "['nombre':'ruben','apellido':'raya']",
      todoItem: "Ruben",
    });

    Alert.alert("Action!", "A new To-do item was created");
  };

  getValue = () => {
    db.ref("/todos").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      console.log(data);

      let todoItems = { ...data };

      Object.keys(todoItems).map((key) => console.log(todoItems[key].todoItem));

      this.setState({
        todos: todoItems,
      });
    });
  };

  clearValues = () => {
    db.ref("/todos").remove();
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>

        <Button
          title="Insertar en FireBase"
          onPress={() => this.createValue()}
        />
        <Button
          title="Limpiar en FireBase"
          onPress={() => this.clearValues()}
        />

        <Button title="Obtener de FireBase" onPress={() => this.getValue()} />

        <Button
          title="Go to Blog"
          onPress={() => this.props.navigation.navigate("Blog")}
        />
        <Button
          title="Go to Blog Details"
          onPress={() => this.props.navigation.navigate("BlogDetails")}
        />
      </View>
    );
  }
}

export default Home;
