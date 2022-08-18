import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  const description = 
  "Lorem ipsum dolor site amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";

  return (
    <View style={styles.mainContainer}>
       <View style={styles.homeTop}>
       <Image
       style={styles.headerImage}
       resizeMode="contain"
       source={require("./assets/logo.jpg")}
       />
       <Text style={styles.mainHeader}>Welcome to </Text>
       <Text style={[styles.mainHeader,
        {
          fontSize:33, 
          color: "#4c5dab",
          marginTop:0,
        }]}>
        educative system</Text>
        <Text style={styles.paraStyle}>{description} </Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,

  },
  mainHeader: {
  fontSize: 30,
  color: "#344055",
  textTransform: "uppercase",
  
  },
});