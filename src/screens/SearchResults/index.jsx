import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';

export default class SearchResults extends Component {
  render() {
    return (
      <View style={{ display: 'flex', justifyContent: 'space-between' }}>
        <View style={{ height: Dimensions.get('window').height - 480 }}>
          <RouteMap />
        </View>
        <View style={{ height: 400, paddingBottom: 20 }}>
          <UberTypes />
        </View>
      </View>
    );
  }
}
