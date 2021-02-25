import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>

        <TouchableOpacity
          onPress={() => this.props.history.push("/home", { name: "Jane" })}>
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
