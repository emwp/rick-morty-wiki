import React, { Component } from 'react';
import { View } from 'react-native';
import Character from '../queries/Character';

import { StyleSheet } from 'react-native';

class ShowCharacter extends Component {
  static navigationOptions = {
    title: 'Characters',
  };
  render() {
    const navState = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Character navState={navState} />
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

export default ShowCharacter;
