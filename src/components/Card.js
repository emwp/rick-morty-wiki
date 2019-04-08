import React from 'react';
import { View, Text, Image, TouchableNativeFeedback, Alert, StyleSheet } from 'react-native';

const Card = props => {
  const { id, image, name, status, species } = props;

  const pressHandler = () => {
    Alert.alert(`id: ${id}`);
  };

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={pressHandler}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={pressHandler} style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </TouchableNativeFeedback>
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
    margin: 10,
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
  text: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 40,
    overflow: 'hidden',
  },
});

export default Card;
