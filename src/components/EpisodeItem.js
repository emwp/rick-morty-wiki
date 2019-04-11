import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ViewOverflow from 'react-native-view-overflow';

const EpisodeItem = props => {
  const { name, air_date, episode } = props;

  return (
    <ViewOverflow>
      <View style={styles.container}>
        <View>
          <Image source={require('../assets/episode.png')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Episode: {episode}</Text>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Air Date: {air_date}</Text>
        </View>
      </View>
    </ViewOverflow>
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
    overflow: 'hidden',
  },
  image: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 5,
  },
});

export default EpisodeItem;
