import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import EpisodeItem from '../components/EpisodeItem';

import environment from '../environment/Environment';

const Episodes = componentProps => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query EpisodesQuery {
          episodes(page: 1) {
            results {
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
          <FlatList
            data={props.episodes.results}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <EpisodeItem
                id={item.id}
                name={item.name}
                air_date={item.air_date}
                episode={item.episode}
              />
            )}
          />
        );
      }}
    />
  );
};

export default Episodes;
