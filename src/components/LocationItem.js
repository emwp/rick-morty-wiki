import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LocationItem = props => {
  const { name, type, dimension } = props;

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/planets.png')} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Type: {type}</Text>
        <Text style={styles.text}>Dimension: {dimension}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 5,
    overflow: 'hidden',
  },
});

export default LocationItem;
