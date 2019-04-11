import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import EpisodeItem from '../components/EpisodeItem';

import environment from '../environment/Environment';

const Episodes = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query EpisodesQuery {
          episodes {
            results {
              name
              air_date
              episode
            }
          }
        }
      `}
      variables={{}}
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
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" color="#7f0ba8" />
            </View>
          );
        }
        return (
          <FlatList
            data={props.episodes.results}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <EpisodeItem name={item.name} air_date={item.air_date} episode={item.episode} />
            )}
          />
        );
      }}
    />
  );
};

export default Episodes;
