import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';

const Stack = createStackNavigator();

export default class RootNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
        
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Destination" component={DestinationSearch} />
          <Stack.Screen name="results" component={SearchResults} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
