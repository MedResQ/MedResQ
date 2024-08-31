import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';
import Homescreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';


function App(): React.JSX.Element {
  useEffect(() => {
    console.log('Hello! from ');
  }, []);

  return (<>
  <DestinationSearch/>
    <StatusBar barStyle={"dark-content"}/>
    </>
  );
}


export default App;
