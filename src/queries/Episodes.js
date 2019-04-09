import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../environment/Environment';

const Episodes = componentProps => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query EpisodesQuery {
          episodes(page: 1) {
            results {
              id
              name
              air_date
              episode
            }
          }
        }
      `}
      variables={{ page: 1 }}
      render={({ error, props }) => {
        if (error) {
          return (
            <View>
              <Text>Error!</Text>
            </View>
          );
        }
        if (!props) {
          return (
            <View>
              <Text>Loading!</Text>
            </View>
          );
        }
        return (
          <View>
            <Text>{props.episodes.results[1].name}</Text>
            <Text>{props.episodes.results[1].episode}</Text>
          </View>
        );
      }}
    />
  );
};

export default Episodes;
