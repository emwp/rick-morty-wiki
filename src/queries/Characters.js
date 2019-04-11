import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';
import Card from '../components/Card';

import environment from '../environment/Environment';

const Characters = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CharactersQuery {
          characters {
            results {
              id
              name
              status
              species
              image
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
            data={props.characters.results}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                id={item.id.toString()}
                name={item.name}
                status={item.status}
                species={item.species}
                image={item.image}
              />
            )}
          />
        );
      }}
    />
  );
};

export default Characters;
