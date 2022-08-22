import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* home screen */}
        <Stack.Screen name="Home">
          {props => <Home {...props} channelName={'educative system'} />}
        </Stack.Screen>

        {/* Course screen */}
        <Stack.Screen name="Course" component={Course} />

        {/* About screen */}
        <Stack.Screen name="About" component={About} />

        {/* UserData screen */}
        <Stack.Screen name="Student" component={UserData} />

        {/* Contact screen */}
        <Stack.Screen name="Contact" component={Contact} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
