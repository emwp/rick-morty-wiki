import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { createRefetchContainer, graphql } from 'react-relay';
import ViewOverflow from 'react-native-view-overflow';

const Episodes = props => {
  const { query, relay } = props;
  const { episodes } = query;

  const _loadMore = () => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      page: episodes.info.next,
    });
    relay.refetch(refetchVariables, null);
  };
  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={episodes.results}
        keyExtractor={item => item.air_date}
        renderItem={({ item }) => (
          <ViewOverflow>
            <View style={styles.container}>
              <View>
                <Image source={require('../assets/episode.png')} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Episode: {item.episode}</Text>
                <Text style={styles.text}>Name: {item.name}</Text>
                <Text style={styles.text}>Air Date: {item.air_date}</Text>
              </View>
            </View>
          </ViewOverflow>
        )}
        onEndReached={_loadMore}
        onEndReachedThreshold={0.01}
      />
    </View>
  );
};

export default createRefetchContainer(
  Episodes,
  {
    query: graphql`
      fragment Episodes_query on Query
        @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
        episodes(page: $page) {
          results {
            name
            episode
            air_date
          }
          info {
            next
          }
        }
      }
    `,
  },
  graphql`
    query EpisodesRefetchQuery($page: Int) {
      ...Episodes_query @arguments(page: $page)
    }
  `,
);

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#247BA0',
  },
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
