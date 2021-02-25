import React from "react";
import { useEffect, useState } from "react";

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Platform,
} from "react-native";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  console.log(countries);

  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
          <Text style={{ fontSize: 18, color: "green", textAlign: "center" }}>
            {countries.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "green",
              textAlign: "center",
              paddingBottom: 10,
            }}>
            Country List:
          </Text>
          <FlatList
            data={countries}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View>
                <Text>{"name: " + item.name}</Text>
                <Text>{"capital: " + item.capital}</Text>
                <View>
                  <Image
                    source={{ uri: item.flag }}
                    style={{ width: 400, height: 400 }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default List;
