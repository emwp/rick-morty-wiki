import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleCharacter = ({ id, name, status, species, gender, origin, lastLocation, image }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{lastLocation}</Text>
    </View>
  );
};

export default SingleCharacter;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 40,
    overflow: 'hidden',
  },
});
