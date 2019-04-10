import React from 'react';
import { Image } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import CharacterList from '../views/CharacterList';
import ShowCharacter from '../views/ShowCharacter';
import LocationList from '../views/LocationList';
import EpisodeList from '../views/EpisodeList';

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
              style={{ width: 26, height: 26, marginTop: 7, tintColor: tintColor }}
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
              source={require('../assets/globe.png')}
              style={{ width: 26, height: 26, marginTop: 7, tintColor: tintColor }}
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
              style={{ width: 26, height: 26, marginTop: 7, tintColor: tintColor }}
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
      inactiveBackgroundColor: '#7f0ba8',
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
