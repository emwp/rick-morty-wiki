import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../environment/Environment';

const Locations = componentProps => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query LocationsQuery {
          locations(page: 1) {
            results {
              id
              name
              type
              dimension
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
            <Text>{props.locations.results[15].name}</Text>
          </View>
        );
      }}
    />
  );
};

export default Locations;
