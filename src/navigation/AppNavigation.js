import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../views/Home';
import ShowCharacter from '../views/ShowCharacter';

const screens = createBottomTabNavigator(
  {
    Characters: {
      screen: Home,
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
    Character: {
      screen: ShowCharacter,
      navigationOptions: {
        tabBarLabel: 'Character',
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
    tabBarOptions: {
      activeTintColor: '',
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 16,
      },
      style: {
        flexDirection: 'row',
      },
    },
  },
);

export default createAppContainer(screens);
