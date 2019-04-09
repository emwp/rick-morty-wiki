import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Locations from '../queries/Locations';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Locations />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99cbfc',
  },
});

export default Home;
