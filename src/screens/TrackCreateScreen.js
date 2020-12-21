//import "../_mockLocation"; //testing
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);

  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable to track location</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
