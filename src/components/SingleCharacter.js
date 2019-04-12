import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SingleCharacter = ({ name, status, species, gender, origin, lastLocation, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Name: {name}</Text>
        <Text style={styles.info}>Gender: {gender}</Text>
        <Text style={styles.info}>Status: {status}</Text>
        <Text style={styles.info}>Species: {species}</Text>
        <Text style={styles.info}>Origin: {origin}</Text>
        <Text style={styles.info}>Location: {lastLocation}</Text>
      </View>
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
  infoContainer: {
    marginTop: 10,
  },
  info: {
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
  },
});
