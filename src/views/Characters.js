import React, { Fragment } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createRefetchContainer, graphql } from 'react-relay';
import ViewOverflow from 'react-native-view-overflow';

const Characters = props => {
  const { query, relay } = props;
  const { characters } = query;

  const _loadMore = () => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      page: characters.info.next,
    });
    relay.refetch(refetchVariables, null);
  };
  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={characters.results}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ViewOverflow>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => pressHandler()}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => pressHandler()} style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </ViewOverflow>
        )}
        onEndReached={_loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default createRefetchContainer(
  Characters,
  {
    query: graphql`
      fragment Characters_query on Query
        @argumentDefinitions(page: { type: "Int", defaultValue: 1 }) {
        characters(page: $page) {
          results {
            id
            name
            image
          }
          info {
            next
          }
        }
      }
    `,
  },
  graphql`
    query CharactersRefetchQuery($page: Int) {
      ...Characters_query @arguments(page: $page)
    }
  `,
);

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#247BA0',
  },
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
    overflow: 'hidden',
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
  },
});
