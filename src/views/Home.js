import React from 'react';
import Character from '../queries/Character';

import { View, Text, StyleSheet } from 'react-native';

const Details = props => <Character />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    margin: 20,
    marginTop: 50,
  },
});

export default Details;
