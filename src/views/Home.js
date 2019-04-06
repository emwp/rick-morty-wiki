import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Home = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Home</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    margin: 20,
  },
});

export default Home;
