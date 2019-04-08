import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from '../views/Home';
import Login from '../views/Login';

const screens = createStackNavigator(
  {
    Login: { screen: Login, navigationOptions: { header: null } },
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EFF0F1',
        color: 'purple',
      },
      headerTintColor: '#1e90ff',
      headerTitleStyle: {
        color: '#1e90ff',
      },
    },
  },
);

export default createAppContainer(screens);
