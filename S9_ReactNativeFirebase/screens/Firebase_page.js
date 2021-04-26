// screens/Test.js

import React, { Component } from "react";
import { Button, View, Text, Alert } from "react-native";
import Firebase from "../database/firebase";
const db = Firebase.database();

class Firebase_page extends Component {
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

  //Funciones globales

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>C.R.U.D. Operations</Text>

        <Button title="Create" onPress={() => this.createValue()} />
        <Button title="Read" onPress={() => this.getValue()} />
        {/* El reto es configurar el update */}
        <Button title="Update" disabled={true} />
        {/*  */}
        <Button title="Delete" onPress={() => this.clearValues()} />
      </View>
    );
  }
}

export default Firebase_page;
