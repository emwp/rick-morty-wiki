import React from 'react';
import { View, Text } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../environment/Environment';
import SingleCharacter from '../components/SingleCharacter';

const Character = props => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CharacterQuery($charID: ID!) {
          character(id: $charID) {
            name
            status
            species
            gender
            origin {
              name
            }
            location {
              name
            }
            image
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
            <SingleCharacter
              id={props.character.id}
              name={props.character.name}
              status={props.character.status}
              species={props.character.species}
              gender={props.character.gender}
              origin={props.character.origin.name}
              lastLocation={props.character.location.name}
              image={props.character.image}
            />
          </View>
        );
      }}
    />
  );
};

export default Character;
