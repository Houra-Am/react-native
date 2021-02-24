import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";

const App = () => {
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const onSubmit = () => {
    if (password.length < 6) {
      Alert.alert("Not secure");
    } else if (password.length >= 6) {
      Alert.alert("Secure password");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt}>Log in</Text>

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        onChangeText={setEmail}
        value={email}
        defaultValue='You can type in me'
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        onChangeText={setPassword}
        secureTextEntry={true}
        value={password}
        defaultValue='You can type in me'
      />
      <Pressable onSubmit={() => Alert.alert("Simple Button pressed")}>
        <Text style={styles.submitBtn}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  txt: {
    color: "blue",
  },

  submitBtn: {
    backgroundColor: "pink",
    width: 50,
  },
});

export default App;
