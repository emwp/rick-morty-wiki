import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../environment/Environment';
import Locations from '../views/Locations';

class LocationList extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query LocationListQuery {
            ...Locations_query
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <Text>{error.message}</Text>;
          } else if (props) {
            return <Locations query={props} />;
          }
          return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" color="#7f0ba8" />
            </View>
          );
        }}
      />
    );
  }
}

export default LocationList;
