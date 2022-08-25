import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text,Image} from 'react-native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>

      <TouchableOpacity
        style={[styles.buttonStyle,
          {
            paddingHorizontal:25
          },
          ]}
        onPress={() => navigation.navigate('Course')}>
        {/* <Text>Course</Text> */}
        <Image 
        style={styles.iconStyle}
        source={{
          uri: "https://img.icons8.com//stickers/90/000000/training.png",
        }}/>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonStyle,
          {
            paddingHorizontal:25
          },
        ]}
        onPress={() => navigation.navigate('Student')}>
       {/*  <Text>Student</Text> */} 
       <Image 
        style={styles.iconStyle}
        source={{
          uri: "https://img.icons8.com/stickers/100/000000/conference.png",
        }}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.buttonStyle,
        {
          paddingHorizontal:25
        },
      ]}
        onPress={() => navigation.navigate('About')}>
      {/*    <Text>About</Text> */}
      <Image 
        style={styles.iconStyle}
        source={{
          uri: "https://img.icons8.com/stickers/100/000000/about.png",
        }}/>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.buttonStyle,
        {
          paddingHorizontal:25
        },
      ]}
        onPress={() => navigation.navigate('Contact')}>
      {/*  <Text>Contact</Text>  */} 
      <Image 
        style={styles.iconStyle}
        source={{
          uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
        }}/>
      </TouchableOpacity>

    
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
        flexDirection: "row",
    },
    textStyle: {
       textTransform: "uppercase",
        

    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,
    },
    
});

export default Menu;
