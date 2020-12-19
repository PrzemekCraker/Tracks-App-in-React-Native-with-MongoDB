import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 5 + i * 0.001,
        longitude: 5 + i * 0.001,
        latitudeDelta: 5 + i * 0.001,
        longitudeDelta: 5 + i * 0.001,
      });
    } else {
    }
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 5,
        longitude: 5,
        latitudeDelta: 5,
        longitudeDelta: 5,
      }}
    >
      {" "}
      <Polyline coordinates={points} />{" "}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
