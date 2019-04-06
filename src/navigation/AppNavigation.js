import { createAppContainer, createSwitchNavigator, create } from 'react-navigation';
import Home from '../views/Home';
import Details from '../views/Details';
import Login from '../views/Login';

const screens = createSwitchNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    Details: { screen: Details },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(screens);
