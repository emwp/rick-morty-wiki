import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { createRefetchContainer, graphql } from 'react-relay';
import ViewOverflow from 'react-native-view-overflow';

const Locations = props => {
  const { query, relay } = props;
  const { locations } = query;

  const _loadMore = () => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      page: locations.info.next,
    });
    relay.refetch(refetchVariables, null);
  };
  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={locations.results}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <ViewOverflow>
            <View style={styles.container}>
              <View>
                <Image source={require('../assets/planets.png')} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Name: {item.name}</Text>
                <Text style={styles.text}>Type: {item.type}</Text>
                <Text style={styles.text}>Dimension: {item.dimension}</Text>
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
  Locations,
  {
    query: graphql`
      fragment Locations_query on Query
        @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
        locations(page: $page) {
          results {
            name
            type
            dimension
          }
          info {
            next
          }
        }
      }
    `,
  },
  graphql`
    query LocationsRefetchQuery($page: Int) {
      ...Locations_query @arguments(page: $page)
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
