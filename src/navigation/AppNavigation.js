import React from 'react';
import { Image } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import CharacterList from '../queries/CharacterList';
import ShowCharacter from '../views/Character';
import LocationList from '../queries/LocationList';
import EpisodeList from '../queries/EpisodeList';

const screens = createBottomTabNavigator(
  {
    Characters: {
      screen: CharacterList,
      navigationOptions: {
        tabBarLabel: 'Characters',
        tabBarIcon: ({ tintColor }) => {
          return (
            <Image
              source={require('../assets/rick.png')}
              style={{ width: 26, height: 26, marginTop: 7 }}
            />
          );
        },
      },
    },
    Episodes: {
      screen: EpisodeList,
      navigationOptions: {
        tabBarLabel: 'Episodes',
        tabBarIcon: ({ tintColor }) => {
          return (
            <Image
              source={require('../assets/camera.png')}
              style={{ width: 26, height: 26, marginTop: 7 }}
            />
          );
        },
      },
    },
    Locations: {
      screen: LocationList,
      navigationOptions: {
        tabBarLabel: 'Locations',
        tabBarIcon: ({ tintColor }) => {
          return (
            <Image
              source={require('../assets/globe.png')}
              style={{ width: 26, height: 26, marginTop: 7 }}
            />
          );
        },
      },
    },
  },
  {
    initialRouteName: 'Characters',
    tabBarOptions: {
      activeTintColor: '',
      activeBackgroundColor: '#7f0ba8',
      inactiveBackgroundColor: '#b133dd',
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 16,
        color: 'white',
      },
    },
  },
);

const CharacterDetails = createStackNavigator(
  {
    Character: {
      screen: ShowCharacter,
      navigationOptions: () => ({ title: 'Character' }),
    },
    Characters: {
      screen: screens,
      navigationOptions: () => ({ header: null }),
    },
  },
  {
    initialRouteName: 'Characters',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#7f0ba8',
      },
      headerTintColor: '#fff',
    },
  },
);

const SwitchStack = createSwitchNavigator(
  {
    Main: screens,
    CharDetails: CharacterDetails,
  },
  { initialRouteName: 'Main' },
);

export default createAppContainer(SwitchStack);
