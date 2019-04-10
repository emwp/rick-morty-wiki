import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SingleCharacter = ({ id, name, status, species, gender, origin, lastLocation, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

export default SingleCharacter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '95%',
    height: undefined,
    aspectRatio: 1.25,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10,
  },
  info: {
    fontSize: 18,
  },
});
