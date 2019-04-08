import React from 'react';
import { View, Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../environment/Environment';

const Character = props => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CharacterQuery($charID: ID!) {
          character(id: $charID) {
            name
          }
        }
      `}
      variables={{ charID: props.navState.id }}
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
            <Text>Name: {props.character.name}</Text>
          </View>
        );
      }}
    />
  );
};

export default Character;
