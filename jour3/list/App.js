import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import List from "./List";

const App = () => {
  return (
    <ScrollView style={[styles.container]}>
      <List></List>
      <Pressable onPress={() => Alert.alert("I said don't press me!")}>
        <Text>Don't press me!</Text>
      </Pressable>
      <ActivityIndicator size='small' color='#0000ff'></ActivityIndicator>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a28eb2",
  },

  txtContainer: {
    backgroundColor: "white",
    margin: 32,
  },

  big: {
    fontSize: 30,
  },

  center: {
    textAlign: "center",
  },

  bold: {
    fontWeight: "bold",
  },

  smallWords: {
    marginVertical: 80,
  },
});

export default App;
