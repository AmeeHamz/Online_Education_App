import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import CourseDetails from './src/screens/CourseDetails';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* home screen */}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {props => <Home {...props} channelName={'educative system'} />}
        </Stack.Screen>

        {/* Course screen */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: 'Courses',
            headerTitleAlign: 'center',
          }}
        />

        {/* About screen */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* UserData screen */}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Students Data",
            headerTitleAlign: 'center',
          }}
        />

        {/* Contact screen */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* CourseDetails screen */}
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
