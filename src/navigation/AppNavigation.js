import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from '../views/Home';
import Login from '../views/Login';
import ShowCharacter from '../views/ShowCharacter';

const screens = createBottomTabNavigator(
  {
    Login: { screen: Login, navigationOptions: { header: null } },
    Home: { screen: Home },
    Character: { screen: ShowCharacter },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 16,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
  },
);

export default createAppContainer(screens);
