import { StyleSheet, Text, View ,Linking,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const About = () => {
  return (
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}> Ameer Hamza </Text>
        <Text style={styles.paraStyle}> I am a full stack developer  </Text>
  
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://avatars.githubusercontent.com/u/92137648?s=400&u=743803ba2501ae39ed83f2e12d29b6e968ab8b70&v=4",
            }}
          />
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About me </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aenean commodo ligula eget dolor.
          </Text>
        </View>
  
        <Text style={styles.mainHeader}> Follow me on Social Network </Text>
  
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://portfoliohamza.netlify.app/")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1688/1688400.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://github.com/AmeeHamz"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1051/1051326.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://www.linkedin.com/in/ameer-hamza-account-url/")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
    },
  
    imgStyle: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    mainHeader: {
      fontSize: 18,
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "500",
      marginTop: 50,
      marginBottom: 10,
      fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 30,
    },
    aboutLayout: {
      backgroundColor: "#4c5dab",
      paddingHorizontal: 30,
      marginVertical: 30,
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 15,
      fontFamily: "JosefinSans_700Bold",
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
  });
  
  export default About;