import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, Image, TouchableNativeFeedback, StyleSheet } from 'react-native';

const Card = props => {
  const { id, image, name, navigation } = props;
  const pressHandler = () => navigation.navigate('Character', { id: id });
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={() => pressHandler()}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={() => pressHandler()} style={styles.textContainer}>
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
    borderColor: '#fff',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10,
  },
  image: {
    borderColor: '#7f0ba8',
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

export default withNavigation(Card);
