import React, { Component } from 'react';
import { View } from 'react-native';
import Characters from '../queries/Characters';

import { StyleSheet } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Characters',
  };
  render() {
    return (
      <View style={styles.container}>
        <Characters />
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
