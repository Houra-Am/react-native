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

const myApp = () => {
  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.txtContainer}>
        <Text style={[styles.smallWords, styles.big]}>Try editing me! 🎉</Text>
        <Text style={[styles.smallWords, styles.center]}>
          Try editing me! 🎉
        </Text>
        <Text style={[styles.smallWords, styles.bold]}>Try editing me! 🎉</Text>
      </View>
      <Image
        source={{
          uri:
            "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png",
        }}
        style={{ width: 200, height: 100 }}></Image>
      <Image
        source={require("./image/konexio-logo_1.png")}
        style={{ width: 200, height: 100 }}></Image>
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
    backgroundColor: "blue",
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

export default myApp;
