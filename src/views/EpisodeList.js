import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Episodes from '../queries/Episodes';

class EpisodeList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Episodes />
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

export default EpisodeList;
