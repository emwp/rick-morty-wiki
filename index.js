import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('rickAndMorty', () => App);
