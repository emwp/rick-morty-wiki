import React from 'react';
import { View, Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../environment/Environment';
import SingleEpisode from '../components/SingleEpisode';

const Episode = props => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query EpisodeQuery($epID: ID!) {
          episode(id: $epID) {
            name
            air_date
            episode
            characters {
              name
            }
          }
        }
      `}
      variables={{ epID: props.navState.id }}
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
            <SingleEpisode
              id={props.episode.id}
              name={props.episode.name}
              air_date={props.episode.air_date}
              episode={props.episode.episode}
              characters={props.episode.characters}
            />
          </View>
        );
      }}
    />
  );
};

export default Episode;
