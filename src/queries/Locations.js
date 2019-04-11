import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import LocationItem from '../components/LocationItem';

import environment from '../environment/Environment';

const Locations = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query LocationsQuery {
          locations {
            results {
              name
              type
              dimension
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
            <View>
              <Text>Loading!</Text>
            </View>
          );
        }
        return (
          <FlatList
            data={props.locations.results}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <LocationItem name={item.name} type={item.type} dimension={item.dimension} />
            )}
          />
        );
      }}
    />
  );
};

export default Locations;
