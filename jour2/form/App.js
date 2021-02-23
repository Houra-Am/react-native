import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
      </View>

      <Button title='Outline button' type='outline' />

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue='You can type in me'
      />
    </ScrollView>
  );
};

export default App;
