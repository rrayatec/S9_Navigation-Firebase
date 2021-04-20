// App.js

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Blog from "./screens/Blog";
import BlogDetails from "./screens/BlogDetails";
import Test from "./screens/Test";

// import Facebook from "./screens/Facebook";

// import Login from "./components/login";
// import Signup from "./components/signup";
// import Dashboard from "./components/dashboard";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen name="Blog" component={Blog} options={{ title: "Blog" }} />      
      <Stack.Screen name="MyTest" component={Blog} options={{ title: "Test" }} />      

      <Stack.Screen
        name="BlogDetails"
        component={BlogDetails}
        options={{ title: "Blog Detail" }}
      />

      {/* <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Signup" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ title: "Login" }, { headerLeft: null })}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ title: "Dashboard" }, { headerLeft: null })}
      />

      <Stack.Screen
        name="Facebook"
        component={Facebook}
        options={({ title: "Facebook" }, { headerLeft: null })}
      /> */}

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
