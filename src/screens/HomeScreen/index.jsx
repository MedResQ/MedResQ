import React, { Component } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <View style={{ height: Dimensions.get('window').height - 470 }}>
          <HomeMap />
        </View>
        <CovidMessage />
        <View style={{ marginBottom: 30 }}>
          <HomeSearch />
        </View>
      </View>
    );
  }
}
