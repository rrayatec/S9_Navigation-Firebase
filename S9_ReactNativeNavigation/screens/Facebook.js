import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import * as Facebook from "expo-facebook";

const appId = "1056864104425258";

const testFacebookLogin = async () => {
  try {
    await Facebook.initializeAsync("<APP_ID>");
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      var resp = await response.json()
      console.log(resp);
      Alert.alert("Logged in!", `Hi ${resp.name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export default function FacebookLogin() {
  React.useEffect(() => {
    Facebook.initializeAsync(appId);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={() => testFacebookLogin()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
