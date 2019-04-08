import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

const Card = props => {
  const { id, image, name, status, species } = props;
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#fff',
    height: 120,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#1e90ff',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 5,
    zIndex: 1000,
  },
  image: {
    borderColor: '#1e90ff',
    borderWidth: 3,
    borderRadius: 50,
    height: 100,
    width: 100,
    marginLeft: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Card;
