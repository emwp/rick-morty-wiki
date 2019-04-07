import React from 'react';
import { View, Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../environment/Environment';

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CharacterQuery {
            character(id: 5) {
              name
            }
          }
        `}
        variables={{ id: 5 }}
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
              <Text>Character: {props.character.name}</Text>
            </View>
          );
        }}
      />
    );
  }
}
