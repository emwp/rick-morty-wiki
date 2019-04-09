import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleLocation = ({ id, name, status, species, gender, origin, lastLocation, image }) => {
  return (
    <View>
      <Text style={styles.text}>Should be character name: {name}</Text>
    </View>
  );
};

export default SingleLocation;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    overflow: 'hidden',
  },
});
