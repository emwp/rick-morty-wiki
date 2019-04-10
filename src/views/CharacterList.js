import React, { Component } from 'react';
import { View } from 'react-native';
import Characters from '../queries/Characters';

import { StyleSheet } from 'react-native';

class CharacterList extends Component {
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
    backgroundColor: '#247BA0',
  },
});

export default CharacterList;
